import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {


    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const condition = form.condition.value;
        const number = form.number.value;
        const location = form.location.value;
        const price = form.price.value;
        const category = form.category.value;
        const buyPrice = form.buyPrice.value;
        const year = form.year.value;
        const used = form.used.value;
        const description = form.description.value;
        const image = form.picture.files[0];

        const date = new Date();

        const formData = new FormData();
        formData.append('image', image);

        const url = "https://api.imgbb.com/1/upload?key=047745c250b2bedf1b2b864ff6999ae2"

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const img = data.data.url
                sendToBackEnd(img);
            })

        const sendToBackEnd = (img) => {

            const bike = {
                name: name,
                condition: condition,
                number: number,
                location: location,
                price: price,
                category: category,
                buyPrice: buyPrice,
                date: date,
                used: used,
                des: description,
                img: img,
                year: year,
                sellerId: user?.uid,
                sellerName: user?.name
            }

            fetch('http://localhost:5000/bikes', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bike)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success('Product Added Successfully.')
                    form.reset();
                    navigate('/dashboard/myproducts')
                })
                .catch(error => console.error(error));
        }
    }

    return (
        <div className='w-full'>
            <div className='flex justify-center items-center'>
                <div className='bg-white px-16 py-8 rounded-lg shadow-lg shadow-indigo-500/40'>
                    <form onSubmit={handleAddProduct} className='mb-4'>
                        <h1 className='text-3xl font-semibold'>Add Product</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <label className="label">
                                    <span className="label-text text-2xl">Name: </span>
                                </label>
                                <input type="text" placeholder="PRODUCT NAME" className="input input-bordered input-accent w-56 md:w-72" name='name' />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-2xl">Condition</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs" name='condition'>
                                    <option>Excellent</option>
                                    <option>Good</option>
                                    <option>Fair</option>
                                </select>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-2xl">Contact Number: </span>
                                </label>
                                <input type="text" placeholder="CONTACT NUMBER" className="input input-bordered input-accent w-56 md:w-72" name='number' />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-2xl">Location: </span>
                                </label>
                                <input type="text" placeholder="LOCATION" className="input input-bordered input-accent w-56 md:w-72" name='location' />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-2xl">Price: </span>
                                </label>
                                <input type="text" placeholder="PRICE" className="input input-bordered input-accent w-56 md:w-72" name='price' />
                            </div>
                            <div className="flex justify-start flex-col">
                                <label className="label">
                                    <span className="label-text text-xl">Category:</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs" name='category'>
                                    <option>Scrambler</option>
                                    <option>Standard</option>
                                    <option>Cruiser</option>
                                    <option>Caferacer</option>
                                    <option>Sports</option>
                                    <option>Scooty</option>
                                </select>
                            </div>
                            <div className="flex justify-start flex-col">
                                <label className="label">
                                    <span className="label-text text-xl">Buying Price: </span>
                                </label>
                                <input type="text" placeholder="Buying PRICE" className="input input-bordered input-accent w-56 md:w-72" name='buyPrice' />
                            </div>
                            <div className="flex justify-start flex-col">
                                <label className="label">
                                    <span className="label-text text-xl">Year of Purchase: </span>
                                </label>
                                <input type="text" placeholder="YEAR OF PURCHASE" className="input input-bordered input-accent w-56 md:w-72" name='year' />
                            </div>
                            <div className="flex justify-start flex-col">
                                <label className="label">
                                    <span className="label-text text-xl">Years Used: </span>
                                </label>
                                <input type="text" placeholder="YEAR OF USE" className="input input-bordered input-accent w-56 md:w-72" name='used' />
                            </div>
                            <div className="flex justify-start flex-col">
                                <label className="label">
                                    <span className="label-text text-xl">Picture: </span>
                                </label>
                                <input type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" name='picture' />
                            </div>
                        </div>
                        <div className="flex justify-start flex-col">
                            <label className="label">
                                <span className="label-text text-xl">Details: </span>
                            </label>
                            <textarea className="textarea rounded-md textarea-bordered textarea-accent  h-24 w-full" placeholder="FOOD DESCRIPTION" name='description'></textarea>
                        </div>
                        <button type="submit" className='btn btn-outline btn-success mt-4 px-8 py-2 text-xl'>SUBMIT</button>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default AddProduct;