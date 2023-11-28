class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state *= 1.5;
    }
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }
  
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }
  
  const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  );
  
  console.log(sherlock.releaseDate);
  console.log(sherlock.state);
  sherlock.fix();
  console.log(sherlock.state); 
  
  const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.author); 
  picknick.state = 10;
  console.log(picknick.state); 
  picknick.fix();
  console.log(picknick.state); 











  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
        console.log(`Книга "${book.name}" успешно добавлена в библиотеку.`);
      } else {
        console.log(`Книга "${book.name}" не может быть добавлена в библиотеку из-за низкого состояния.`);
      }
    }
  
    findBookBy(type, value) {
      for (const book of this.books) {
        if (book[type] === value) {
          return book;
        }
      }
      return null;
    }
  
    giveBookByName(bookName) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].title === bookName) {
          const book = this.books[i];
          this.books.splice(i, 1);
          console.log(`Книга "${book.name}" успешно выдана читателю.`);
          return book;
        }
      }
      console.log(`Книга "${bookName}" не найдена в библиотеке.`);
      return null;
    }
  }
  
  const library = new Library("Библиотека имени Ленина");
  
  library.addBook(
    new DetectiveBook(
      "Артур Конан Дойл",
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      2019,
      1008
    )
  );
  library.addBook(
    new FantasticBook(
      "Аркадий и Борис Стругацкие",
      "Пикник на обочине",
      1972,
      168
    )
  );
  library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
  library.addBook(new Magazine("Мурзилка", 1924, 60));
  
  console.log(library.findBookBy("name", "Властелин колец")); 
  console.log(library.findBookBy("releaseDate", 1924).name); 
  
  console.log("Количество книг до выдачи: " + library.books.length);
  library.giveBookByName("Машина времени");
  console.log("Количество книг после выдачи: " + library.books.length);
  
  const bookToDamage = library.giveBookByName("Пикник на обочине");
  bookToDamage.state = 20;
  
  console.log("Состояние книги 'Пикник на обочине' перед восстановлением: " + bookToDamage.state);
  bookToDamage.state = 60;
  console.log("Состояние книги 'Пикник на обочине' после восстановления: " + bookToDamage.state);
  
  library.addBook(bookToDamage); 











  class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark < 2 || mark > 5) {
        return;
      }
  
      if (!this.marks.hasOwnProperty(subject)) {
        this.marks[subject] = [];
      }
  
      this.marks[subject].push(mark);
    }
  
    getAverageBySubject(subject) {
      if (!this.marks.hasOwnProperty(subject)) {
        return 0;
      }
  
      const marks = this.marks[subject];
      const sum = marks.reduce((acc, curr) => acc + curr, 0);
      const average = sum / marks.length;
      return average;
    }
  
    getAverage() {
      const subjects = Object.keys(this.marks);
      if(subjects.length === 0) {
        return 0;
      }
  
      const totalMarks = subjects.reduce((acc, subject) => {
        const average = this.getAverageBySubject(subject);
        return acc + average;
      }, 0);
      const overallAverage = totalMarks / subjects.length;
      return overallAverage || 0;
    }
  }
  
  const student = new Student("John");
  
  student.addMark(4, "физика");
  student.addMark(3, "физика");
  student.addMark(5, "биология");
  student.addMark(4, "биология");
  student.addMark(5, "математика");
  
  const averagePhysics = student.getAverageBySubject("физика");
  console.log(`Средний балл по предмету физика: ${averagePhysics}`);
  
  const averageBiology = student.getAverageBySubject("биология");
  console.log(`Средний балл по предмету биология: ${averageBiology}`);
  
  const overallAverage = student.getAverage();
  console.log(`Средний балл по всем предметам: ${overallAverage}`);
  
  