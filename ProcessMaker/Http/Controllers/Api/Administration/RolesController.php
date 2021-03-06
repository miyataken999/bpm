<?php

namespace ProcessMaker\Http\Controllers\Api\Administration;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use ProcessMaker\Http\Controllers\Controller;
use ProcessMaker\Model\Role;
use ProcessMaker\Transformers\RoleTransformer;


/**
 * Controller that handles all Roles API endpoints
 *
 */
class RolesController extends Controller
{

    /**
     * Fetch a collection of roles based on paged request and filter if provided
     * 
     * @return JsonResponse A list of matched roles and paging data
     */
    public function index(Request $request)
    {
        // Grab pagination data
        $perPage = $request->input('per_page', 10);
        // Filter
        $filter = $request->input('filter', null);
        $orderBy = $request->input('order_by', 'name');
        $orderDirection = $request->input('order_direction', 'asc');
        // Note, the current page is automatically handled by Laravel's pagination feature
        if($filter) {
            $filter = '%' . $filter . '%';
            $roles = Role::where('name', 'like', $filter)
                ->orWhere('code', 'like', $filter)
                ->orWhere('description', 'like', $filter)
                ->orderBy($orderBy, $orderDirection);
            if($orderBy == 'total_users') {
                // Need to include users count with roles
                $roles = $roles->leftJoin('users', 'users.role_id', 'id')
                    ->groupBy('id')
                    ->select(DB::raw('roles.*, count(users.id) as total_users'));
            }
            $roles = $roles->paginate($perPage);
        } else {
            if($orderBy == 'total_users') {
                // Need to include users count with roles
                $roles = Role::leftJoin('users', 'users.role_id', 'roles.id')
                    ->groupBy('roles.id')
                    ->select(DB::raw('roles.*, count(users.id) as total_users'))
                    ->orderBy($orderBy, $orderDirection)->paginate($perPage);
            } else {
                $roles = Role::orderBy($orderBy, $orderDirection)->paginate($perPage);
            }
        }
        // Return fractal representation of paged data
        return fractal($roles, new RoleTransformer())->respond();
    }

    /**
     * Fetch a single role from the system and return
     */
    public function get(Request $request, Role $role)
    {
        return fractal($role, new RoleTransformer())->respond();
    }

    public function create(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|max:255',
            'code' => 'unique:roles,code|required|max:255',
            'description' => 'max:255',
            'status' => 'required|in:ACTIVE,DISABLED'
        ]);
        $role = Role::create($data);
        $role->refresh();
        return fractal($role, new RoleTransformer())->respond();
    }

}
