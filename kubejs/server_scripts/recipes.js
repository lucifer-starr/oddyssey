ServerEvents.recipes(e => {
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
    e.remove({ id: 'minecraft:jukebox' }),
    e.shaped(
        Item.of('minecraft:jukebox', 1), 
        [
            'PPP',
            'PAP', 
            'PPP'
        ],
    {
        P: '#minecraft:planks',
        A: 'minecraft:amethyst_shard',
    }
    ),
    e.remove({ id: 'minecraft:noteblock' }),
    e.shaped(
        Item.of('minecraft:noteblock', 1), 
        [
            'PRP',
            'ARA', 
            'PRP'
        ],
    {
        P: '#minecraft:planks',
        A: 'minecraft:amethyst_shard',
        R: 'minecraft:redstone',

    }
    ),
    e.remove({ id: 'etched:etching_table' }),
    e.shaped(
        Item.of('etched:etching_table', 1), 
        [
            ' AI',
            'PPP', 
            '   '
        ],
    {
        A: 'minecraft:amethyst_shard',
        I: 'minecraft:iron_ingot',  
        P: '#minecraft:planks'
    }
    ),

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