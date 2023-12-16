function Header(){
    const s1 = {height:"40px", display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"gray"} 
    const s2 = {backgroundColor:"red", width:"20%", height:"40px", textDecoration:"none", display:"flex", justifyContent:"center", alignItems:"center" }
    const s3 = {backgroundColor:"gray",width:"20%",  height:"40px", textDecoration:"none",  display:"flex", justifyContent:"center", alignItems:"center"}
   return(<div style={{width:"46vw" , padding:"2vw"}}>
    <h1 style={{color:"red" , marginBottom:"0px"}}>Family Welleness</h1>
     <h3 style={{color:"green" , marginTop:"0px"}} >M a s s a g e   - T h e r a p y </h3>
     <div style={s1} >
        <a style={s2}  href="./">Home</a>
        <a style={s3} href="./">About</a>
        <a style={s3} href="./">Service</a>
        <a style={s3} href="./">FAQ</a>
        <a style={s3} href="./">Contact</a>
     </div>
    </div>)
}

export default Header;