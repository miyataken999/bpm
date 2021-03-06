<?php
use Ramsey\Uuid\Uuid;
use Faker\Generator as Faker;
use ProcessMaker\Model\PmTable;
use ProcessMaker\Model\DbSource;

/**
 * Model factory for an additional table (pmTable)
 */
$factory->define(PmTable::class, function (Faker $faker) {
    return [
        'name' => $faker->regexify('[a-zA-Z0-9_]{5,10}'),
        'description' =>$faker->sentence(3),
        'type' => 'PMTABLE',
        'db_source_id' => function() {
            return factory(DbSource::class)->create()->id;
        }
    ];
});
