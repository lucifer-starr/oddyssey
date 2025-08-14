ServerEvents.recipes(e => {
    // new recipes
    e.shaped(
        Item.of('minecraft:elytra', 1), // arg 1: output
        [
            'BCB',
            'PBP', // arg 2: the shape (array of strings)
            'P P'
        ],
        {
        P: 'minecraft:phantom_membrane',
        B: 'minecraft:breeze_rod',  //arg 3: the mapping object
        C: 'minecraft:honeycomb'
        }
    ),
    //simple recipe changes
    e.replaceInput(
         {output: 'minecraft:jukebox' }, 
                    'minecraft:diamond',           
                    'minecraft:amethyst_shard'         
    ),
    e.replaceInput(
         {output: 'etched:etching_table' }, 
                    'minecraft:diamond',           
                    'minecraft:amethyst_shard'         
    ),
    e.replaceInput(
         {output: 'etched:boombox' }, 
                    'minecraft:copper_ingot',           
                    'minecraft:iron_ingot'         
    ),
    e.replaceInput(
         {output: 'minersdelight:copper_pot' }, 
                    'minecraft:copper_ingot',           
                    'minecraft:brick'         
    ),
    e.replaceInput(
         {output: 'minersdelight:copper_cup' }, 
                    'minecraft:copper_ingot',           
                    'minecraft:brick'         
    ),

    //complex recipe changes
    //e.remove({ id: 'minecraft:note_block' }),
    //e.shaped(
    //    'minecraft:note_block', 
    //    [
    //        'PAP',
    //        'ARA', 
    //        'PAP'
    //    ],
    //{
    //    P: '#minecraft:planks',
    //    A: 'minecraft:amethyst_shard',
    //    R: 'minecraft:redstone'

    //}),

    e.remove({ id: 'heartstone:heartstone' }),
    e.shaped(
        Item.of('heartstone:heartstone', 2), 
        [
            'HA ',
            'AH ',
        ],
    {
        A: 'minecraft:amethyst_shard',
        H: 'heart_crystals:heart_crystal_shard',  
    }
    ),
    
    

  console.log('Hello! The recipe event has fired!')
})