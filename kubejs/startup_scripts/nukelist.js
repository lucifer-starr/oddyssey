 global.nukelist = [ // List of things to be disabled and hidden from the game. You can nuke Items, Blocks, Fluids, and Entities, although the last one won't have much of an effect (it can do stuff like making cows unmilkable though, but won't disable spawning or spawn egg item)
    'arts_and_crafts:pottery_sherd',
    'arts_and_crafts:finale_pottery_sherd',
    'autumnity:sap_bottle',
    'autumnity:syrup_bottle',
    'autumnity:pancake',
    'autumnity:maple_sapling',
    'autumnity:yellow_maple_sapling',
    'autumnity:orange_maple_sapling',
    'autumnity:red_maple_sapling',
    'autumnity:maple_leaves',
    'autumnity:yellow_maple_leaves',
    'autumnity:orange_maple_leaves',
    'autumnity:red_maple_leaves',
    'autumnity:maple_leaf_pile',
    'autumnity:yellow_maple_leaf_pile',
    'autumnity:orange_maple_leaf_pile',
    'autumnity:red_maple_leaf_pile',
    'autumnity:autumn_crocus',
    'brewinandchewin:quiche_slice',
    'bountifulfares:apple_log',
    'bountifulfares:apple_wood',
    'bountifulfares:stripped_apple_log',
    'bountifulfares:stripped_apple_wood',
    'bountifulfares:apple_leaves',
    'bountifulfares:flowering_apple_leaves',
    'bountifulfares:apple_sapling',
    'bountifulfares:orange_log',
    'bountifulfares:orange_wood',
    'bountifulfares:stripped_orange_log',
    'bountifulfares:stripped_orange_wood',
    'bountifulfares:orange_leaves',
    'bountifulfares:flowering_orange_leaves',
    'bountifulfares:orange_sapling',
    'bountifulfares:orange',
    'bountifulfares:lemon_log',
    'bountifulfares:lemon_wood',
    'bountifulfares:stripped_lemon_log',
    'bountifulfares:stripped_lemon_wood',
    'bountifulfares:lemon_leaves',
    'bountifulfares:flowering_lemon_leaves',
    'bountifulfares:lemon_sapling',
    'bountifulfares:plum_log',
    'bountifulfares:plum_wood',
    'bountifulfares:stripped_plum_log',
    'bountifulfares:stripped_plum_wood',
    'bountifulfares:plum_leaves',
    'bountifulfares:flowering_plum_leaves',
    'bountifulfares:plum_sapling',
    'bountifulfares:wild_wheat',
    'bountifulfares:wild_carrots',
    'bountifulfares:wild_potatoes',
    'bountifulfares:wild_beetroots',
    'bountifulfares:apple_block',
    'bountifulfares:orange_block',
    'bountifulfares:lemon_block',
    'bountifulfares:plum_block',
    'bountifulfares:golden_apple_block',
    'bountifulfares:hoary_apple_block',
    'no_mans_delight:walnut_cookie',
    'nomansland:pear_cobbler_slice',
    'nomansland:spruce_bookshelf',
    'nomansland:birch_bookshelf',
    'nomansland:jungle_bookshelf',
    'nomansland:dark_oak_bookshelf',
    'nomansland:acacia_bookshelf',
    'nomansland:mangrove_bookshelf',
    'nomansland:cherry_bookshelf',
    'nomansland:warped_bookshelf',
    'nomansland:crimson_bookshelf',
    'nomansland:bamboo_bookshelf',
    'nomansland:pine_bookshelf',
    'nomansland:maple_bookshelf',
    'nomansland:willow_bookshelf',
    'newworld:fir_bookshelf',
    'rubinated_nether:ruby_brazier',
    'farmersdelight:rope',
    'farmersdelight:apple_pie',
    'farmersdelight:apple_pie_slice',
    'farmersdelight:chocolate_pie_slice',
    'farmersdelight:cake_slice',
    'farmersdelight:sweet_berry_cheesecake_slice',
    'mynethersdelight:magma_cake_slice',

// I like to separate the different things by registry type, so below could be the fluid section

    'examplemod:examplefluidid', // Last option can end with a comma

// I also like to sort them in alphabetical order, there's a VSCode addon for that

]


// Below are some utility functions to quickly add things in multiple wood types/colours, you could expand this to toolsets or ingot types
const moddedWoodTypes = [
  'autumnity:maple', "architectspalette:twisted"
]
// You can expand the above to include modded wood types too 


/*for (const wood of vanillaWoodTypes) {
    global.nukelist.push(`examplefurnituremod:${wood}_table`)
}*/

/*for (const colour of dyeColours) {
    global.nukelist.push(`examplefurnituremod:${colour}_coloured_thing`)
    global.nukelist.push(`examplefurnituremod:${colour}_coloured_second_thing`) 
}*/

// Below would nuke all coloured_third_thing in every colour except for blue
/*for (const colour of dyeColours) {
    if (colour !== 'blue') {
      global.nukelist.push(`examplefurnituremod:${colour}_coloured_third_thing`)
    }
}*/

// To use these item nuking scripts, type the IDs of items you want to disable in the space above. 
// Then, type 'nukelist reload', which will run these commands: (this is a custom script as well)
// /kubejs reload startup-scripts
// /reload
// /kubejs reload lang

// Can nuke Items, Blocks, Fluids, Entities
 