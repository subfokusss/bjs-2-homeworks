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
        console.log(`Книга "${book.title}" успешно добавлена в библиотеку.`);
      } else {
        console.log(`Книга "${book.title}" не может быть добавлена в библиотеку из-за низкого состояния.`);
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
          console.log(`Книга "${book.title}" успешно выдана читателю.`);
          return book;
        }
      }
      console.log(`Книга "${bookName}" не найдена в библиотеке.`);
      return null;
    }
  }
  
  class Book {
    constructor(author, title, releaseDate, pageCount) {
      this.author = author;
      this.title = title;
      this.releaseDate = releaseDate;
      this.pageCount = pageCount;
      this.state = 100;
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, title, releaseDate, pageCount) {
      super(author, title, releaseDate, pageCount);
      this.genre = "Детектив";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, title, releaseDate, pageCount) {
      super(author, title, releaseDate, pageCount);
      this.genre = "Фантастика";
    }
  }
  
  class NovelBook extends Book {
    constructor(author, title, releaseDate, pageCount) {
      super(author, title, releaseDate, pageCount);
      this.genre = "Роман";
    }
  }
  
  class Magazine extends Book {
    constructor(title, releaseDate, pageCount) {
      super(null, title, releaseDate, pageCount);
      this.genre = "Журнал";
    }
  }
  
  // Тестовый сценарий
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
  
  console.log(library.findBookBy("title", "Властелин колец")); 
  console.log(library.findBookBy("releaseDate", 1924).title); 
  
  console.log("Количество книг до выдачи: " + library.books.length);
  library.giveBookByName("Машина времени");
  console.log("Количество книг после выдачи: " + library.books.length);
  
  const bookToDamage = library.giveBookByName("Пикник на обочине");
  bookToDamage.state = 20;
  
  console.log("Состояние книги 'Пикник на обочине' перед восстановлением: " + bookToDamage.state);
  bookToDamage.state = 60;
  console.log("Состояние книги 'Пикник на обочине' после восстановления: " + bookToDamage.state);
  
  library.addBook(bookToDamage); 