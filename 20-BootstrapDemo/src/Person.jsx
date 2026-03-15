export default function Person(props){
  return(
    <>
    <div className="bg-warning p-3">
      <img height='100px'src="https://plus.unsplash.com/premium_photo-1772490550206-2b37633ef61f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <p>Name : {props.name}</p>
    </div>
    </>
  );
}