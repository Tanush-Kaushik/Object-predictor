import { item } from "../models1/items.js"
import { user } from "../models1/user.js"

export const testController = async(req,res) => {
    
    const { name ,item_name} = req.body
    
    await user.create({
        name
    })  
    await item.create({
        item_name
    })

    res.send('Bang')
}