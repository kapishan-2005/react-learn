import html from "./assets/html.webp" 
import Card from "./card"
function CourseList(){
    const courses =[
        {
            id:1,
            name:"html course",
            price: 199,
            image: html,
            rating: 5
        },
         {
            id:2,
            name:"css course",
            price: 200,
            image: html,
            rating: 4
        },
         {
            id:3,
            name:"js course",
            price: 400,
            image: html,
            rating: 5
        },
        {
            id:4,
            name:"react",
            price:500,
            image:html,
            rating: 6

        }
    ]
    courses.sort((x,y) => y.price - x.price)
    const bestCourses = courses.filter((course) => course.price > 200)
    const coursesList = bestCourses.map((course) => <Card key={course.id} name={course.name} price={course.price} image={course.image} rating = {course.rating}/>)
    return(
        <>
        {coursesList}
        </>
    );
}
export default CourseList;