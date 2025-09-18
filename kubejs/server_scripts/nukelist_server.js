ServerEvents.tags('item', event => {
   if (global.nukelist.length > 0) {
      event.removeAllTagsFrom(global.nukelist)  // Removes all tags from nuked items so they don't show up in tag viewers (EMI) or break recipes when removed
      event.add('oddyssey:nukelist', global.nukelist)  // Type your own pack name where it says modpack!
      event.add('c:hidden_from_recipe_viewers', global.nukelist) // Hides from EMI/JEI
   }
})

ServerEvents.tags('block', event => {
   if (global.nukelist.length > 0) {
      event.removeAllTagsFrom(global.nukelist)
      event.add('oddyssey:nukelist', global.nukelist) 
   }
})

ServerEvents.tags('fluid', event => {
   if (global.nukelist.length > 0) {
      event.removeAllTagsFrom(global.nukelist)
      event.add('oddyssey:nukelist', global.nukelist)
   }
})

ServerEvents.tags('entity_type', event => {
   if (global.nukelist.length > 0) {
      event.removeAllTagsFrom(global.nukelist)
      event.add('oddyssey:nukelist', global.nukelist)
   }
})


ServerEvents.recipes(event => {
   if (global.nukelist.length > 0) {
      event.remove({ input: global.nukelist }) // Removes any recipe this item is an INPUT in
      event.remove({ output: global.nukelist }) // Removes any recipe this item is an OUTPUT in
   }
})

PlayerEvents.chat(event => { // You can say "nukelist reload" in chat to reload all scripts, I'll probably change this at some point
   if (event.message == 'nukelist reload') {
      event.server.runCommand(`tell @a Now reloading Nukelist scripts`)
      event.server.runCommand(`kubejs reload startup-scripts`)
      event.server.runCommand(`reload`)
      event.server.runCommand(`kubejs reload lang`)
   }
})