export default function PersonalInfoHide() {
    return (
    <div class="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center scale-0 duration-150 -z-10">
        <form class="bg-white w-11/12 h-3/4 shadow-2xl rounded-3xl p-10 md:px-20 md:py-16">
            <h2 class="md:text-3xl text-lg font-bold md:mb-10">Personal Information</h2>
            <div class="md:w-11/12 mt-4">
                    <div class="flex flex-wrap items-center justify-between mb-5">
                        <label for="name">Name</label>
                        <input type="text" placeholder="Your Name" id="name" name="name" class="border-solid border-2 border-slate-300 outline-none rounded-md py-2 px-6 w-full md:w-9/12 xl:w-10/12 "/>
                    </div>
                    <div class="flex flex-wrap items-center justify-between mb-5">
                        <label for="email">Email</label>
                        <input type="email" placeholder="Your Email" id="email" name="email" class="border-solid border-2 border-slate-300 outline-none rounded-md py-2 px-6 w-full md:w-9/12 xl:w-10/12"/>
                    </div>
                    <div class="flex flex-wrap items-center justify-between mb-5">
                        <label for="phone-number">Phone Number</label>
                        <input type="tel" placeholder="Phone Number" id="phone-number" name="phone-number" class="border-solid border-2 border-slate-300 outline-none rounded-md py-2 px-6 w-full md:w-9/12 xl:w-10/12"/>
                    </div>
                    <div class="flex flex-wrap items-center mb-7 w-full justify-between">
                        <label for="ktp">KTP Image</label>
                        <div class="w-full md:w-9/12 xl:w-10/12">
                            <input type="file" id="ktp" name="ktp" />
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <input type="submit" value="Save Changes" class="bg-green-500 hover:bg-green-400 py-3 px-5 cursor-pointer rounded-md text-white mr-5"/>
                        <button class="bg-slate-400 hover:bg-slate-300 py-3 px-5 cursor-pointer rounded-md text-white mr-5">Cancel</button>
                    </div> 
            </div>
        </form>
    </div>
    )
}