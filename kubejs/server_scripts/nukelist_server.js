ServerEvents.tags('item', event => {
    event.removeAllTagsFrom(global.nukelist) // removes items in the nukelist from tags assigned by mods or by vanilla
    event.add('oddyssey:nukelist', global.nukelist) // Add your own tag here for your modpack
 })

 ServerEvents.recipes(e => {
    global.nukelist.forEach(item => {
        e.remove({ output: item })
        e.remove({ input: item })
    })
})

ServerEvents.tags('item', e => {
    global.nukelist.forEach(item => {
        e.add('c:hidden_from_recipe_viewers', item)
    })
})

    let myFilter = ItemFilter.custom(item=> {
        return item.hasTag("#oddyssey:nukelist")
      })
      
      LootJS.modifiers(event => {
        event
          .addTableModifier("chest", "block", "entity", "fishing", "archaeology", "gift", "vault", "shearing", "piglin_barter")
          .removeLoot(myFilter);
     }) 