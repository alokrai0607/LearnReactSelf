import style from  "./Hello.module.css";

function Hello(){
  console.log(style.App1)
    return(
        <>
          <h1>Hello </h1>
          <h3 className={style.App1}>World</h3>
        
        </>
    );
}

export default Hello;
