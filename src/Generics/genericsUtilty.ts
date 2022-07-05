
//ts 內建的泛型function

//1.Readonly

const nameList:Readonly<string[]> = ["Json","Aliy"]
// nameList.push("Aby") //不可以新增

const person1:Readonly<Person> = {name:'Json',age:25}
// person1.name = "Jacy"  //不可以修改唷!


//2.Partial (部分的)
//這個工具可以讓該型態變成"部分的"

//使用情境 :
//初始化的時候我們知道該物件是什麼型態，但並不想給他們初始值

interface CourseGoal {
  title: string;
  description: string;
  date: Date;
}

// const goal1:CourseGoal = {}  //一開始不想給值，但這樣寫會被說，missing the following properties from type 'CourseGoal': title, description, date
const goal1: Partial<CourseGoal> = {}; //透過Partial達到，初始化自帶該型態的屬性，但不用賦值(都是undefiend)
goal1.date = new Date();
goal1.title = "Learn typscript";
goal1.description = "Let's learn ts from scrach!";

//封裝成函式的時候如果報錯，return 出去時要再次斷言成原本型態
function createCourseGoal(title: string, description: string, date: Date) {
  let goal1: Partial<CourseGoal> = {};
  goal1.date = date;
  goal1.title = title;
  goal1.description = description;
  return goal1 as CourseGoal
}
console.log(createCourseGoal("AAA","AAA is good",new Date()))
