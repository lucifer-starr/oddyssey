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
    )

  console.log('Hello! The recipe event has fired!')
})