import dbConnect from "../../utils/dbConnect";
import Warehouse from "../../models/Warehouse";
export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            {
                const { address, type, format, city, state, imageUrl,zone,size,category } = req.body;
                try {
                    await dbConnect();
                    const warehouse = new Warehouse({
                        address,
                        type,
                        format,
                        city,
                        state,
                        zone,
                        size,
                        category,
                        imageUrl: imageUrl ? imageUrl : 'https://res.cloudinary.com/da75fckow/image/upload/v1684146205/client-uploads/dummY_warehouse_nnwsfa.avif',
                    })


                    const savedDocument = await warehouse.save();
                    return res.status(201).json(savedDocument);
                }
                catch (err) {
                    return res.status(500).json({ message: 'Server error' })
                }
                break;
            }

        case 'GET':
            {
                try {
                    const { id } = req.query;
                    await dbConnect();
                    const fetchedWarehouse = await Warehouse.findById(id);
                    if (!fetchedWarehouse) return res.status(200).json({ message: 'Wrong ID' });
                    return res.status(200).json({ message: "Fetched Successfully", warehouse: fetchedWarehouse });
                }
                catch (err) {
                    console.log(err)
                    return res.status(500).json({ message: 'Server error' })
                }
                break;
            }

        case 'PUT':
            {

                const { address, type, format, city, state, imageUrl,zone,size,category } = req.body;
                try {
                    await dbConnect();
                    const newItem = {
                        address,
                        type,
                        format,
                        city,
                        state,
                        zone,
                        size,
                        category,
                        imageUrl: imageUrl ? imageUrl : 'https://res.cloudinary.com/da75fckow/image/upload/v1684146205/client-uploads/dummY_warehouse_nnwsfa.avif'
                    }

                    const itemId = req.query.id;

                    const updatedItem = await Warehouse.findByIdAndUpdate(itemId, newItem, {
                        new: true,
                    });

                    if (!updatedItem) {
                        return res.status(404).json({ error: 'Item not found' });
                    }

                    res.status(200).json(updatedItem);

                }
                catch (err) {
                    return res.status(500).json({ message: 'Server error' })
                }
                break;
            }

            case 'DELETE':
                {
                    try {
                        await dbConnect();
                        const itemId = req.query.id;
                        const updatedItem = await Warehouse.findByIdAndDelete(itemId);
                        return res.status(200).json({message:'Deleted Successfully'});
                    }
                    catch (err) {
                        return res.status(500).json({ message: 'Server error' })
                    }
                }




        default:
            return res.status(500).json({ message: "API NOT FOUND" })

    }
}