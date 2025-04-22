import axios from 'axios'
import React, { useState,useEffect,useRef } from 'react'
import { Categories } from '../../categorydata'
import { API_URL } from '../../Config'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
export default function AddEvent() {

  let admin = useSelector((store1)=>store1.admin.admin);
  let navigate = useNavigate()

  let eventnameref = useRef();
  let placeref = useRef();
  let dateref = useRef();
  let timeref = useRef();
  let maxlimitref = useRef();
  let categoryref = useRef();
  let imgref = useRef();
  let imgformref = useRef();
  let btnref = useRef();
  let idref = useRef()

  const [eventdata,setEventdata]=useState([])
  // let dataevent = axios.get(API_URL+"event")
  // .then((d)=>setEventdata(d.data))
  
  const [eventsUI,seteventUI]=useState();
 
  useEffect(() => {
    if (!admin.islogin) {
      navigate("/adminlogin");
    } 
    else
    {
      if(eventdata.length<=0)
      {
    (async ()=>{await  axios.get(API_URL + "event")
    .then((d) => setEventdata(d.data))})();
      }
    selectEvents()
    }
  }, [eventdata]);


  let categoryUI = Categories.map((c)=>
  {
    return <option value={c.categoryname} id={c.cid}>{c.categoryname}</option>
  })


 
  
  let selectEvents=()=>
  {
    let eventsUIMAP = eventdata.map((e)=>{
      return ( <tr>
         
        <td>{e.eventname}</td>
        <td>{e.place}</td>
        <td>{e.date}</td>
        <td>{e.time}</td>
        <td>{e.maxlimit}</td>
        <td>{e.category}</td>
        <td><img height={100} width={100} 
        src={API_URL+"uploads/"+e.imgpath}  alt={e.eventname} className="rounded"/></td>        
        <td className='border'><input type="button" value="Edit" onClick={()=>editFunction(e)}/></td>
        <td className='border'><input type="button" value="Delete" onClick={()=>deleteFunction(e._id)}/></td>
      </tr> )
    })
    seteventUI(eventsUIMAP)
  }

  let empty=()=>
    {
      eventnameref.current.value =""
       placeref.current.value=""
       dateref.current.value=""
       timeref.current.value=""
       maxlimitref.current.value=""
       categoryref.current.value=""
      //  imgref.current.files[0]=""
      imgformref.current.src=""
    }
    

    let add = async () => {    
      let headers = { headers: { 'Content-Type': 'multipart/form-data ' } };
      if(btnref.current.value=="Add")
      {
        const data = {
          eventname: eventnameref.current.value,
          place: placeref.current.value,
          date: dateref.current.value,
          time: timeref.current.value,
          maxlimit: maxlimitref.current.value,
          category: categoryref.current.value,
          img: imgref.current.files[0],
          
        };
      axios.post(API_URL + "event/", data, headers)
        .then((d) => {
          if (d.data.message === "event added") {
            setEventdata(d.data.eventdata);
            empty()
          } else {
            alert("in else of then");
          }
        })
        .catch((e) => alert(e));
      }
      else
      {      
        const data = {
          eventname: eventnameref.current.value,
          place: placeref.current.value,
          date: dateref.current.value,
          time: timeref.current.value,
          maxlimit: maxlimitref.current.value,
          category: categoryref.current.value,        
          id:idref.current.value
        };
        console.log(data)
      await  axios.put(API_URL + "event/",data)
        .then((d) => {
          console.log(d.data)
          if (d.data.message === "event updated") {
            setEventdata(d.data.eventdata);
            selectEvents()
            empty()
          } else {
            alert("in else of then");
          }
        })
        .catch((e) => alert(e));
  
        btnref.current.value="Add"
        imgref.current.style.display="block"
        empty()
      }
    };
    
  let editFunction = (eventobj)=>
    { eventnameref.current.value = eventobj.eventname;
      placeref.current.value = eventobj.place;
      dateref.current.value = moment(eventobj.date).format("YYYY-MM-DD");
      timeref.current.value = eventobj.time;
      maxlimitref.current.value = eventobj.maxlimit;
      categoryref.current.value = eventobj.category;
      idref.current.value=eventobj._id
      imgformref.current.src = API_URL+"uploads/"+eventobj.imgpath
      btnref.current.value="update"
      imgref.current.style.display="none"
      alert(btnref.current.value)
    } 
    let deleteFunction =async (id) => {
      let x = confirm("Are you sure you want to delete this event?");
      if (!x) return;
   await   axios.delete(API_URL + "event", { data: { id: id } })
        .then((d) =>
        {
          (async ()=>{await  axios.get(API_URL + "event")
          .then((d) => setEventdata(d.data))})();
        })
        .catch((e) => console.log(e));
    };
  return (
    <div className="min-h-screen bg-gray-100 p-8">
    <input  type="text" ref={idref} />
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Event</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">Event Name:</label>
              <input type="text" ref={eventnameref} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Place:</label>
              <input type="text" ref={placeref} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Date:</label>
              <input type="date" ref={dateref} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Time:</label>
              <input type="time" ref={timeref} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Max Limit:</label>
              <input type="text" ref={maxlimitref} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Category:</label>
              <select ref={categoryref} className="w-full p-2 border rounded">
                {categoryUI}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Event Image:</label>
              <input type="file" ref={imgref} className="w-full p-2 border rounded" />
              <img ref={imgformref}></img>
            </div>
            <input  ref={btnref} onClick={add} type="button" value="Add"
             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"/>
              
            
          </div>
        </div>

        <div className="bg-white md:col-span-2 p-6 rounded-lg shadow-md overflow-x-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Event List</h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-left">Event Name</th>
                <th className="p-3 text-left">Place</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Time</th>
                <th className="p-3 text-left">Max Limit</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Image</th>
                <th className="p-3 text-left">Edit</th>
                <th className="p-3 text-left">Delete</th>
              </tr>
            </thead>
            <tbody>
              {eventsUI}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )

}