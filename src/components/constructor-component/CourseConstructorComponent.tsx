import {coursesArray} from "../../data/arr.ts";
import type {ICourse} from "../../models/ICourse.ts";
import {CourseInfoComponent} from "../course-info-component/CourseInfoComponent.tsx";
import "./CourseConstructorComponent.css"

export const CourseConstructorComponent = () => {
    return (
        <div>
            {
                coursesArray.map((course: ICourse, index:number) => {
                    return <CourseInfoComponent course={course} key={index}/>
            })
            }
        </div>
    )
}