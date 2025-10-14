import Input from "@/common/Input/Input";

export default function ProfileInformationSection(){
    return(
        <div className="grid border border-gray-500 p-4 m-8 ">
           <div>
            <div>
                <Input
                labelText="Full Name"
                onChange={()=>{}}
                value=""
                inputId="fullName"
                />
                <Input
                labelText="Phone Number"
                onChange={()=>{}}
                value=""
                inputId="fullName"
                />
                <Input
                labelText="Email"
                onChange={()=>{}}
                value=""
                inputId="fullName"
                />
            </div>
           </div>
        </div>
    )
}