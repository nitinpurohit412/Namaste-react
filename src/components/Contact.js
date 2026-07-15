const Contact = () => {
    return (
        <div>
            <h1 className="text-4xl m-4 p-4 font-bold">Contact Us</h1>
            <form>
                <input type="text" className="border border-black m-2 p-2" placeholder="Name"/>
                <input type="text" className="border border-black m-2 p-2" placeholder="Message"/>
                <button className="border border-black m-2 p-2 bg-gray-400 rounded-sm" >Submit</button>
            </form>
        </div>
    )
};

export default Contact;