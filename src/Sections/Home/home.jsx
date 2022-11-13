import styles from "./styles.module.css";
import Heading from "../../Components/Heading/heading";

function Home() {
	return (
		<section id= "home" style = {styles.home_section} >

<Heading index="0" heading="Profile" />

<div className={styles.container}>

<div className={styles.left}>

			<h3 className= {styles.heading_3}>Hii , my self </h3>
			<h1  className= {styles.heading_1}> Vikash Kumar Verma</h1>
			<h2  className= {styles.heading_2}>Student</h2>
		
			<div className= {styles.desc}>

						<p>Hard-working college student with a passion for technology and innovation.</p> 
<p>Have more than 1 years of experience in full stack web development  and programming in various languages and also have experience in Data Science .</p> 
<p>Eager to take this knowledge  and break into being on the technical side.
</p>

</div>


<a href="#work"><button className={styles.btn}>Check out my work !</button></a>

</div>


			<div className={styles.right}>
				<img src="./images/profile.jpg" alt="nahi load hua"  className={styles.img}/>
<div className={styles.img_border}></div>

</div>

</div>
		</section>
	)
}

export default Home;
