document.addEventListener("DOMContentLoaded", () => {
  const refreshIcons = () => {
    if (window.lucide) window.lucide.createIcons();
  };

  const esc = text =>
    String(text).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));



  const rows = [
    
    ["The Alchemist", "Paulo Coelho", "novel", "classic", 1988, 13.99, "9780062315007", ["phil"]],
    ["The Seven Husbands of Evelyn Hugo", "Taylor Jenkins Reid", "novel", "hot", 2017, 16.99, "9781501139239", ["drama"]],
    ["1984", "George Orwell", "novel", "classic", 1949, 11.99, "9780451524935", ["scifi"]],
    ["To Kill a Mockingbird", "Harper Lee", "novel", "classic", 1960, 14.99, "9780061120084", ["drama"]],
    ["Pride and Prejudice", "Jane Austen", "novel", "classic", 1813, 9.99, "9780141439518", ["drama"]],
    ["The Great Gatsby", "F. Scott Fitzgerald", "novel", "classic", 1925, 10.99, "9780743273565", ["drama"]],
    ["Where the Crawdads Sing", "Delia Owens", "novel", "hot", 2018, 17.99, "9780735219090", ["drama"]],
    ["The Midnight Library", "Matt Haig", "novel", "hot", 2020, 16.99, "9780525559474", ["scifi", "phil"]],
    ["Project Hail Mary", "Andy Weir", "novel", "hot", 2021, 18.99, "9780593135204", ["scifi"]],
    ["Dune", "Frank Herbert", "novel", "classic", 1965, 15.99, "9780441172719", ["scifi"]],
    ["The Hobbit", "J.R.R. Tolkien", "novel", "classic", 1937, 14.99, "9780547928227", ["scifi"]],
    ["Fourth Wing", "Rebecca Yarros", "novel", "latest", 2023, 19.99, "9781649374042", ["scifi", "drama"]],
    ["James", "Percival Everett", "novel", "latest", 2024, 18.99, "9780385550369"],

    
    ["Atomic Habits", "James Clear", "business", "hot", 2018, 25.0, "9780735211292", ["self", "psych"]],
    ["Zero to One", "Peter Thiel", "business", "hot", 2014, 22.0, "9780804139298", ["lead"]],
    ["The Lean Startup", "Eric Ries", "business", "hot", 2011, 21.0, "9780307887894", ["lead"]],
    ["Deep Work", "Cal Newport", "business", "hot", 2016, 20.0, "9781455586691", ["self", "psych"]],
    ["Start with Why", "Simon Sinek", "business", "hot", 2009, 19.0, "9781591846444", ["lead"]],
    ["Principles", "Ray Dalio", "business", "hot", 2017, 28.0, "9781501124020", ["self", "lead", "phil"]],
    ["Good to Great", "Jim Collins", "business", "classic", 2001, 24.0, "9780066620992", ["lead"]],
    ["How to Win Friends and Influence People", "Dale Carnegie", "business", "classic", 1936, 16.0, "9780671027032", ["self", "psych"]],
    ["The Subtle Art of Not Giving a F*ck", "Mark Manson", "business", "hot", 2016, 23.0, "9780062457714", ["self", "psych", "phil"]],

    ["Rich Dad Poor Dad", "Robert T. Kiyosaki", "financial", "classic", 1997, 14.0, "9781612680194"],
    ["The Psychology of Money", "Morgan Housel", "financial", "hot", 2020, 18.0, "9780857197689"],
    ["The Intelligent Investor", "Benjamin Graham", "financial", "classic", 1949, 22.0, "9780060555665"],
    ["The Millionaire Next Door", "Thomas J. Stanley", "financial", "classic", 1996, 17.0, "9781589795471"],
    ["The Simple Path to Wealth", "JL Collins", "financial", "hot", 2016, 19.0, "9781533667922"],

    
    ["Clean Code", "Robert C. Martin", "technology", "classic", 2008, 42.0, "9780132350884"],
    ["The Pragmatic Programmer", "Andrew Hunt & David Thomas", "technology", "classic", 1999, 45.0, "9780135957059"],
    ["Designing Data-Intensive Applications", "Martin Kleppmann", "technology", "hot", 2017, 49.0, "9781449373320"],
    ["Co-Intelligence", "Ethan Mollick", "technology", "latest", 2024, 28.0, "9780593716717"],
    ["The Innovators", "Walter Isaacson", "technology", "hot", 2014, 24.0, "9781476708706", ["lead"]],

    
    ["Sapiens", "Yuval Noah Harari", "science", "hot", 2011, 24.0, "9780062316097"],
    ["A Brief History of Time", "Stephen Hawking", "science", "classic", 1988, 18.0, "9780553380163"],
    ["Cosmos", "Carl Sagan", "science", "classic", 1980, 19.0, "9780345539434"],
    ["The Selfish Gene", "Richard Dawkins", "science", "classic", 1976, 17.0, "9780198788607"],
    ["Thinking, Fast and Slow", "Daniel Kahneman", "science", "hot", 2011, 21.0, "9780374533557", ["psych"]],


    ["The Body Keeps the Score", "Bessel van der Kolk", "medicine", "hot", 2014, 22.0, "9780143127741", ["psych"]],
    ["Being Mortal", "Atul Gawande", "medicine", "hot", 2014, 20.0, "9781250076229"],
    ["When Breath Becomes Air", "Paul Kalanithi", "medicine", "hot", 2016, 17.0, "9780812988406", ["bio"]],
    ["Outlive", "Peter Attia", "medicine", "latest", 2023, 32.0, "9780593236598"],

    
    ["The Creative Act", "Rick Rubin", "art", "latest", 2023, 32.0, "9780593652886"],
    ["Steal Like an Artist", "Austin Kleon", "art", "hot", 2012, 15.0, "9780761169253"],
    ["The Story of Art", "E. H. Gombrich", "art", "classic", 1950, 39.0, "9780714832470"],
    ["The Design of Everyday Things", "Don Norman", "art", "classic", 1988, 26.0, "9780465050659"],


    ["Becoming", "Michelle Obama", "audio", "hot", 2018, 24.0, "9781524763138", ["bio"]],
    ["Born a Crime", "Trevor Noah", "audio", "hot", 2016, 20.0, "9780399588174", ["bio"]],
    ["Educated", "Tara Westover", "audio", "hot", 2018, 21.0, "9780399590504", ["bio"]],
    ["Can't Hurt Me", "David Goggins", "audio", "hot", 2018, 22.0, "9781544512280", ["bio", "self"]],
    ["Man's Search for Meaning", "Viktor E. Frankl", "audio", "classic", 1946, 14.0, "9780807014295", ["bio", "self", "psych", "phil"]]
  ];

  /* =====================================================
     450 MORE BOOKS (to reach 500)
     Row format: title, author, first-published year, "tags"
     badge and price are generated automatically:
       year <= 1999 -> Classic, year >= 2023 -> Latest Release, otherwise Hot
     ===================================================== */

  const EXTRA = {
    novel: [
      ["Brave New World", "Aldous Huxley", 1932, "scifi"],
      ["Animal Farm", "George Orwell", 1945],
      ["Jane Eyre", "Charlotte Brontë", 1847, "drama"],
      ["Wuthering Heights", "Emily Brontë", 1847, "drama"],
      ["Great Expectations", "Charles Dickens", 1861],
      ["A Tale of Two Cities", "Charles Dickens", 1859],
      ["Oliver Twist", "Charles Dickens", 1838],
      ["David Copperfield", "Charles Dickens", 1850],
      ["Moby-Dick", "Herman Melville", 1851],
      ["Frankenstein", "Mary Shelley", 1818, "scifi"],
      ["Dracula", "Bram Stoker", 1897],
      ["The Picture of Dorian Gray", "Oscar Wilde", 1890],
      ["Crime and Punishment", "Fyodor Dostoevsky", 1866, "phil"],
      ["The Brothers Karamazov", "Fyodor Dostoevsky", 1880, "phil"],
      ["War and Peace", "Leo Tolstoy", 1869],
      ["Anna Karenina", "Leo Tolstoy", 1878, "drama"],
      ["Les Misérables", "Victor Hugo", 1862],
      ["The Count of Monte Cristo", "Alexandre Dumas", 1844],
      ["The Three Musketeers", "Alexandre Dumas", 1844],
      ["Don Quixote", "Miguel de Cervantes", 1605],
      ["Madame Bovary", "Gustave Flaubert", 1857, "drama"],
      ["The Stranger", "Albert Camus", 1942, "phil"],
      ["The Plague", "Albert Camus", 1947, "phil"],
      ["The Trial", "Franz Kafka", 1925],
      ["The Metamorphosis", "Franz Kafka", 1915],
      ["One Hundred Years of Solitude", "Gabriel García Márquez", 1967],
      ["Love in the Time of Cholera", "Gabriel García Márquez", 1985, "drama"],
      ["The Catcher in the Rye", "J.D. Salinger", 1951],
      ["Of Mice and Men", "John Steinbeck", 1937],
      ["The Grapes of Wrath", "John Steinbeck", 1939],
      ["East of Eden", "John Steinbeck", 1952],
      ["Lord of the Flies", "William Golding", 1954],
      ["Fahrenheit 451", "Ray Bradbury", 1953, "scifi"],
      ["Catch-22", "Joseph Heller", 1961],
      ["Slaughterhouse-Five", "Kurt Vonnegut", 1969, "scifi"],
      ["Beloved", "Toni Morrison", 1987],
      ["The Color Purple", "Alice Walker", 1982, "drama"],
      ["Their Eyes Were Watching God", "Zora Neale Hurston", 1937, "drama"],
      ["Invisible Man", "Ralph Ellison", 1952],
      ["Things Fall Apart", "Chinua Achebe", 1958],
      ["The Handmaid's Tale", "Margaret Atwood", 1985, "scifi"],
      ["Rebecca", "Daphne du Maurier", 1938, "drama"],
      ["Little Women", "Louisa May Alcott", 1868, "drama"],
      ["Anne of Green Gables", "L. M. Montgomery", 1908],
      ["The Secret Garden", "Frances Hodgson Burnett", 1911],
      ["Treasure Island", "Robert Louis Stevenson", 1883],
      ["The Adventures of Huckleberry Finn", "Mark Twain", 1884],
      ["The Adventures of Tom Sawyer", "Mark Twain", 1876],
      ["Heart of Darkness", "Joseph Conrad", 1899],
      ["Ulysses", "James Joyce", 1922],
      ["Mrs Dalloway", "Virginia Woolf", 1925],
      ["To the Lighthouse", "Virginia Woolf", 1927],
      ["The Sun Also Rises", "Ernest Hemingway", 1926],
      ["The Old Man and the Sea", "Ernest Hemingway", 1952],
      ["A Farewell to Arms", "Ernest Hemingway", 1929, "drama"],
      ["Lolita", "Vladimir Nabokov", 1955],
      ["Brideshead Revisited", "Evelyn Waugh", 1945],
      ["The Remains of the Day", "Kazuo Ishiguro", 1989],
      ["Never Let Me Go", "Kazuo Ishiguro", 2005, "scifi"],
      ["Klara and the Sun", "Kazuo Ishiguro", 2021, "scifi"],
      ["Life of Pi", "Yann Martel", 2001],
      ["The Kite Runner", "Khaled Hosseini", 2003, "drama"],
      ["A Thousand Splendid Suns", "Khaled Hosseini", 2007, "drama"],
      ["The Book Thief", "Markus Zusak", 2005],
      ["The Road", "Cormac McCarthy", 2006],
      ["No Country for Old Men", "Cormac McCarthy", 2005],
      ["Gone Girl", "Gillian Flynn", 2012],
      ["The Girl with the Dragon Tattoo", "Stieg Larsson", 2005],
      ["The Da Vinci Code", "Dan Brown", 2003],
      ["The Shining", "Stephen King", 1977],
      ["It", "Stephen King", 1986],
      ["Misery", "Stephen King", 1987],
      ["The Stand", "Stephen King", 1978],
      ["Murder on the Orient Express", "Agatha Christie", 1934],
      ["And Then There Were None", "Agatha Christie", 1939],
      ["The Hound of the Baskervilles", "Arthur Conan Doyle", 1902],
      ["A Study in Scarlet", "Arthur Conan Doyle", 1887],
      ["The Maltese Falcon", "Dashiell Hammett", 1930],
      ["The Big Sleep", "Raymond Chandler", 1939],
      ["The Fellowship of the Ring", "J.R.R. Tolkien", 1954, "scifi"],
      ["The Two Towers", "J.R.R. Tolkien", 1954, "scifi"],
      ["The Return of the King", "J.R.R. Tolkien", 1955, "scifi"],
      ["The Silmarillion", "J.R.R. Tolkien", 1977, "scifi"],
      ["Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 1997, "scifi"],
      ["Harry Potter and the Chamber of Secrets", "J.K. Rowling", 1998, "scifi"],
      ["Harry Potter and the Prisoner of Azkaban", "J.K. Rowling", 1999, "scifi"],
      ["Harry Potter and the Goblet of Fire", "J.K. Rowling", 2000, "scifi"],
      ["The Lion, the Witch and the Wardrobe", "C.S. Lewis", 1950, "scifi"],
      ["A Game of Thrones", "George R.R. Martin", 1996, "scifi"],
      ["The Name of the Wind", "Patrick Rothfuss", 2007, "scifi"],
      ["Mistborn: The Final Empire", "Brandon Sanderson", 2006, "scifi"],
      ["The Way of Kings", "Brandon Sanderson", 2010, "scifi"],
      ["American Gods", "Neil Gaiman", 2001, "scifi"],
      ["Neverwhere", "Neil Gaiman", 1996, "scifi"],
      ["Good Omens", "Terry Pratchett & Neil Gaiman", 1990, "scifi"],
      ["The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 1979, "scifi"],
      ["Ender's Game", "Orson Scott Card", 1985, "scifi"],
      ["Foundation", "Isaac Asimov", 1951, "scifi"],
      ["I, Robot", "Isaac Asimov", 1950, "scifi"],
      ["Neuromancer", "William Gibson", 1984, "scifi"],
      ["Snow Crash", "Neal Stephenson", 1992, "scifi"],
      ["The Left Hand of Darkness", "Ursula K. Le Guin", 1969, "scifi"],
      ["A Wizard of Earthsea", "Ursula K. Le Guin", 1968, "scifi"],
      ["Do Androids Dream of Electric Sheep?", "Philip K. Dick", 1968, "scifi"],
      ["The Martian", "Andy Weir", 2011, "scifi"],
      ["Ready Player One", "Ernest Cline", 2011, "scifi"],
      ["The Hunger Games", "Suzanne Collins", 2008, "scifi"],
      ["Divergent", "Veronica Roth", 2011, "scifi"],
      ["The Giver", "Lois Lowry", 1993, "scifi"],
      ["The Time Machine", "H. G. Wells", 1895, "scifi"],
      ["The War of the Worlds", "H. G. Wells", 1898, "scifi"],
      ["Twenty Thousand Leagues Under the Seas", "Jules Verne", 1870, "scifi"],
      ["Around the World in Eighty Days", "Jules Verne", 1872],
      ["The Three-Body Problem", "Liu Cixin", 2008, "scifi"],
      ["Piranesi", "Susanna Clarke", 2020, "scifi"],
      ["The Song of Achilles", "Madeline Miller", 2011, "drama"],
      ["Circe", "Madeline Miller", 2018, "scifi"],
      ["Normal People", "Sally Rooney", 2018, "drama"],
      ["Intermezzo", "Sally Rooney", 2024, "drama"],
      ["It Ends with Us", "Colleen Hoover", 2016, "drama"],
      ["Verity", "Colleen Hoover", 2018],
      ["The Housemaid", "Freida McFadden", 2022],
      ["Lessons in Chemistry", "Bonnie Garmus", 2022],
      ["The Thursday Murder Club", "Richard Osman", 2020],
      ["Daisy Jones & The Six", "Taylor Jenkins Reid", 2019, "drama"],
      ["Malibu Rising", "Taylor Jenkins Reid", 2021, "drama"],
      ["The Silent Patient", "Alex Michaelides", 2019],
      ["Where'd You Go, Bernadette", "Maria Semple", 2012],
      ["A Man Called Ove", "Fredrik Backman", 2012, "drama"],
      ["Anxious People", "Fredrik Backman", 2019],
      ["Eleanor Oliphant Is Completely Fine", "Gail Honeyman", 2017],
      ["The Nightingale", "Kristin Hannah", 2015, "drama"],
      ["The Women", "Kristin Hannah", 2024, "drama"],
      ["All the Light We Cannot See", "Anthony Doerr", 2014],
      ["Cloud Cuckoo Land", "Anthony Doerr", 2021],
      ["A Little Life", "Hanya Yanagihara", 2015],
      ["The Goldfinch", "Donna Tartt", 2013],
      ["The Secret History", "Donna Tartt", 1992],
      ["Station Eleven", "Emily St. John Mandel", 2014, "scifi"],
      ["The Overstory", "Richard Powers", 2018],
      ["Americanah", "Chimamanda Ngozi Adichie", 2013, "drama"],
      ["Half of a Yellow Sun", "Chimamanda Ngozi Adichie", 2006],
      ["Pachinko", "Min Jin Lee", 2017, "drama"],
      ["The Vanishing Half", "Brit Bennett", 2020],
      ["Demon Copperhead", "Barbara Kingsolver", 2022],
      ["Tomorrow, and Tomorrow, and Tomorrow", "Gabrielle Zevin", 2022],
      ["Babel", "R. F. Kuang", 2022, "scifi"],
      ["Yellowface", "R. F. Kuang", 2023],
      ["The Poppy War", "R. F. Kuang", 2018, "scifi"],
      ["Iron Flame", "Rebecca Yarros", 2023, "scifi,drama"],
      ["A Court of Thorns and Roses", "Sarah J. Maas", 2015, "scifi,drama"],
      ["Throne of Glass", "Sarah J. Maas", 2012, "scifi"],
      ["The Cruel Prince", "Holly Black", 2018, "scifi"],
      ["Shadow and Bone", "Leigh Bardugo", 2012, "scifi"],
      ["Six of Crows", "Leigh Bardugo", 2015, "scifi"],
      ["Red Rising", "Pierce Brown", 2014, "scifi"],
      ["The Priory of the Orange Tree", "Samantha Shannon", 2019, "scifi"],
      ["Hyperion", "Dan Simmons", 1989, "scifi"],
      ["The Bell Jar", "Sylvia Plath", 1963],
      ["On the Road", "Jack Kerouac", 1957],
      ["Persuasion", "Jane Austen", 1817, "drama"],
      ["Emma", "Jane Austen", 1815, "drama"],
      ["Sense and Sensibility", "Jane Austen", 1811, "drama"],
      ["Middlemarch", "George Eliot", 1871],
      ["Siddhartha", "Hermann Hesse", 1922, "phil"]
    ],

    business: [
      ["Thinking in Bets", "Annie Duke", 2018, "psych"],
      ["The Hard Thing About Hard Things", "Ben Horowitz", 2014, "lead"],
      ["Measure What Matters", "John Doerr", 2018, "lead"],
      ["Crossing the Chasm", "Geoffrey A. Moore", 1991, "lead"],
      ["The Innovator's Dilemma", "Clayton M. Christensen", 1997, "lead"],
      ["Blue Ocean Strategy", "W. Chan Kim & Renée Mauborgne", 2004, "lead"],
      ["Built to Last", "Jim Collins & Jerry I. Porras", 1994, "lead"],
      ["Drive", "Daniel H. Pink", 2009, "psych"],
      ["To Sell Is Human", "Daniel H. Pink", 2012, "psych"],
      ["Influence", "Robert B. Cialdini", 1984, "psych"],
      ["Never Split the Difference", "Chris Voss", 2016, "psych"],
      ["Getting to Yes", "Roger Fisher & William Ury", 1981],
      ["Crucial Conversations", "Kerry Patterson et al.", 2002, "self"],
      ["The Five Dysfunctions of a Team", "Patrick Lencioni", 2002, "lead"],
      ["Leaders Eat Last", "Simon Sinek", 2014, "lead"],
      ["The Infinite Game", "Simon Sinek", 2019, "lead"],
      ["Dare to Lead", "Brené Brown", 2018, "lead,self"],
      ["Multipliers", "Liz Wiseman", 2010, "lead"],
      ["The Effective Executive", "Peter F. Drucker", 1967, "lead"],
      ["High Output Management", "Andrew S. Grove", 1983, "lead"],
      ["Only the Paranoid Survive", "Andrew S. Grove", 1996, "lead"],
      ["Rework", "Jason Fried & David Heinemeier Hansson", 2010, "lead"],
      ["The Mom Test", "Rob Fitzpatrick", 2013, "lead"],
      ["Traction", "Gabriel Weinberg & Justin Mares", 2014, "lead"],
      ["Hooked", "Nir Eyal", 2014, "psych"],
      ["Contagious", "Jonah Berger", 2013],
      ["Made to Stick", "Chip Heath & Dan Heath", 2007],
      ["Switch", "Chip Heath & Dan Heath", 2010, "psych"],
      ["Good Strategy Bad Strategy", "Richard P. Rumelt", 2011, "lead"],
      ["Playing to Win", "A.G. Lafley & Roger L. Martin", 2013, "lead"],
      ["The Goal", "Eliyahu M. Goldratt", 1984, "lead"],
      ["The Phoenix Project", "Gene Kim, Kevin Behr & George Spafford", 2013],
      ["Shoe Dog", "Phil Knight", 2016, "bio,lead"],
      ["Elon Musk", "Walter Isaacson", 2023, "bio"],
      ["Steve Jobs", "Walter Isaacson", 2011, "bio,lead"],
      ["Bad Blood", "John Carreyrou", 2018],
      ["Billion Dollar Whale", "Tom Wright & Bradley Hope", 2018],
      ["The Everything Store", "Brad Stone", 2013],
      ["Grit", "Angela Duckworth", 2016, "psych,self"],
      ["Mindset", "Carol S. Dweck", 2006, "psych,self"],
      ["Essentialism", "Greg McKeown", 2014, "self"],
      ["The 4-Hour Workweek", "Timothy Ferriss", 2007, "self"],
      ["Tools of Titans", "Timothy Ferriss", 2016, "self"],
      ["The Power of Now", "Eckhart Tolle", 1997, "self,phil"],
      ["Extreme Ownership", "Jocko Willink & Leif Babin", 2015, "lead,self"],
      ["The Obstacle Is the Way", "Ryan Holiday", 2014, "self,phil"],
      ["Ego Is the Enemy", "Ryan Holiday", 2016, "self,phil"],
      ["Purple Cow", "Seth Godin", 2003],
      ["This Is Marketing", "Seth Godin", 2018],
      ["Building a StoryBrand", "Donald Miller", 2017]
    ],

    financial: [
      ["The Little Book of Common Sense Investing", "John C. Bogle", 2007],
      ["A Random Walk Down Wall Street", "Burton G. Malkiel", 1973],
      ["One Up on Wall Street", "Peter Lynch", 1989],
      ["The Bogleheads' Guide to Investing", "Taylor Larimore", 2006],
      ["Security Analysis", "Benjamin Graham & David Dodd", 1934],
      ["Common Stocks and Uncommon Profits", "Philip A. Fisher", 1958],
      ["The Essays of Warren Buffett", "Lawrence A. Cunningham", 1997],
      ["Reminiscences of a Stock Operator", "Edwin Lefèvre", 1923],
      ["Principles for Dealing with the Changing World Order", "Ray Dalio", 2021],
      ["The Total Money Makeover", "Dave Ramsey", 2003],
      ["Your Money or Your Life", "Vicki Robin & Joe Dominguez", 1992],
      ["I Will Teach You to Be Rich", "Ramit Sethi", 2009],
      ["The Richest Man in Babylon", "George S. Clason", 1926],
      ["Think and Grow Rich", "Napoleon Hill", 1937, "self"],
      ["The Automatic Millionaire", "David Bach", 2003],
      ["Broke Millennial", "Erin Lowry", 2017],
      ["The Barefoot Investor", "Scott Pape", 2016],
      ["Secrets of the Millionaire Mind", "T. Harv Eker", 2005, "self"],
      ["The Black Swan", "Nassim Nicholas Taleb", 2007, "phil"],
      ["Fooled by Randomness", "Nassim Nicholas Taleb", 2001],
      ["Antifragile", "Nassim Nicholas Taleb", 2012, "phil"],
      ["Skin in the Game", "Nassim Nicholas Taleb", 2018],
      ["The Big Short", "Michael Lewis", 2010],
      ["Liar's Poker", "Michael Lewis", 1989],
      ["Flash Boys", "Michael Lewis", 2014],
      ["Too Big to Fail", "Andrew Ross Sorkin", 2009],
      ["Capital in the Twenty-First Century", "Thomas Piketty", 2013],
      ["The Wealth of Nations", "Adam Smith", 1776],
      ["Freakonomics", "Steven D. Levitt & Stephen J. Dubner", 2005],
      ["Misbehaving", "Richard H. Thaler", 2015, "psych"],
      ["Nudge", "Richard H. Thaler & Cass R. Sunstein", 2008, "psych"],
      ["Poor Charlie's Almanack", "Charles T. Munger", 2005]
    ],

    technology: [
      ["Refactoring", "Martin Fowler", 1999],
      ["Design Patterns", "Erich Gamma et al.", 1994],
      ["Code Complete", "Steve McConnell", 1993],
      ["The Mythical Man-Month", "Frederick P. Brooks Jr.", 1975],
      ["Introduction to Algorithms", "Thomas H. Cormen et al.", 1990],
      ["The Art of Computer Programming", "Donald E. Knuth", 1968],
      ["Structure and Interpretation of Computer Programs", "Harold Abelson & Gerald Jay Sussman", 1985],
      ["The C Programming Language", "Brian W. Kernighan & Dennis M. Ritchie", 1978],
      ["Eloquent JavaScript", "Marijn Haverbeke", 2011],
      ["You Don't Know JS", "Kyle Simpson", 2014],
      ["JavaScript: The Good Parts", "Douglas Crockford", 2008],
      ["Fluent Python", "Luciano Ramalho", 2015],
      ["Python Crash Course", "Eric Matthes", 2015],
      ["Automate the Boring Stuff with Python", "Al Sweigart", 2015],
      ["Effective Java", "Joshua Bloch", 2001],
      ["Head First Design Patterns", "Eric Freeman & Elisabeth Robson", 2004],
      ["The Clean Coder", "Robert C. Martin", 2011],
      ["Clean Architecture", "Robert C. Martin", 2017],
      ["Domain-Driven Design", "Eric Evans", 2003],
      ["Working Effectively with Legacy Code", "Michael C. Feathers", 2004],
      ["Site Reliability Engineering", "Betsy Beyer et al.", 2016],
      ["Accelerate", "Nicole Forsgren, Jez Humble & Gene Kim", 2018],
      ["The DevOps Handbook", "Gene Kim et al.", 2016],
      ["Release It!", "Michael T. Nygard", 2007],
      ["Deep Learning", "Ian Goodfellow, Yoshua Bengio & Aaron Courville", 2016],
      ["Hands-On Machine Learning", "Aurélien Géron", 2017],
      ["Artificial Intelligence: A Modern Approach", "Stuart Russell & Peter Norvig", 1995],
      ["Superintelligence", "Nick Bostrom", 2014],
      ["Life 3.0", "Max Tegmark", 2017],
      ["The Alignment Problem", "Brian Christian", 2020],
      ["Human Compatible", "Stuart Russell", 2019],
      ["AI Superpowers", "Kai-Fu Lee", 2018],
      ["The Age of Surveillance Capitalism", "Shoshana Zuboff", 2019],
      ["Weapons of Math Destruction", "Cathy O'Neil", 2016],
      ["Code", "Charles Petzold", 1999],
      ["The Soul of a New Machine", "Tracy Kidder", 1981],
      ["Hackers", "Steven Levy", 1984],
      ["The Cuckoo's Egg", "Cliff Stoll", 1989],
      ["Ghost in the Wires", "Kevin Mitnick", 2011],
      ["Permanent Record", "Edward Snowden", 2019, "bio"],
      ["Don't Make Me Think", "Steve Krug", 2000],
      ["Algorithms to Live By", "Brian Christian & Tom Griffiths", 2016],
      ["Grokking Algorithms", "Aditya Bhargava", 2016],
      ["Cracking the Coding Interview", "Gayle Laakmann McDowell", 2008],
      ["The Linux Command Line", "William Shotts", 2009],
      ["The Rust Programming Language", "Steve Klabnik & Carol Nichols", 2018]
    ],

    science: [
      ["On the Origin of Species", "Charles Darwin", 1859],
      ["The Double Helix", "James D. Watson", 1968],
      ["Silent Spring", "Rachel Carson", 1962],
      ["The Structure of Scientific Revolutions", "Thomas S. Kuhn", 1962, "phil"],
      ["Surely You're Joking, Mr. Feynman!", "Richard P. Feynman", 1985, "bio"],
      ["The Feynman Lectures on Physics", "Richard P. Feynman", 1964],
      ["Six Easy Pieces", "Richard P. Feynman", 1994],
      ["A Short History of Nearly Everything", "Bill Bryson", 2003],
      ["The Elegant Universe", "Brian Greene", 1999],
      ["The Fabric of the Cosmos", "Brian Greene", 2004],
      ["The Grand Design", "Stephen Hawking & Leonard Mlodinow", 2010],
      ["Brief Answers to the Big Questions", "Stephen Hawking", 2018],
      ["Black Holes and Baby Universes", "Stephen Hawking", 1993],
      ["Pale Blue Dot", "Carl Sagan", 1994],
      ["The Demon-Haunted World", "Carl Sagan", 1995],
      ["Astrophysics for People in a Hurry", "Neil deGrasse Tyson", 2017],
      ["Death by Black Hole", "Neil deGrasse Tyson", 2007],
      ["The Order of Time", "Carlo Rovelli", 2017],
      ["Seven Brief Lessons on Physics", "Carlo Rovelli", 2014],
      ["Reality Is Not What It Seems", "Carlo Rovelli", 2014],
      ["The Blind Watchmaker", "Richard Dawkins", 1986],
      ["The Greatest Show on Earth", "Richard Dawkins", 2009],
      ["The God Delusion", "Richard Dawkins", 2006, "phil"],
      ["Guns, Germs, and Steel", "Jared Diamond", 1997],
      ["Collapse", "Jared Diamond", 2005],
      ["The Third Chimpanzee", "Jared Diamond", 1991],
      ["The Gene", "Siddhartha Mukherjee", 2016],
      ["Genome", "Matt Ridley", 1999],
      ["The Red Queen", "Matt Ridley", 1993],
      ["The Rational Optimist", "Matt Ridley", 2010],
      ["Behave", "Robert M. Sapolsky", 2017, "psych"],
      ["Why Zebras Don't Get Ulcers", "Robert M. Sapolsky", 1994, "psych"],
      ["The Sixth Extinction", "Elizabeth Kolbert", 2014],
      ["Under a White Sky", "Elizabeth Kolbert", 2021],
      ["The Hidden Life of Trees", "Peter Wohlleben", 2015],
      ["Entangled Life", "Merlin Sheldrake", 2020],
      ["I Contain Multitudes", "Ed Yong", 2016],
      ["An Immense World", "Ed Yong", 2022],
      ["The Soul of an Octopus", "Sy Montgomery", 2015],
      ["Packing for Mars", "Mary Roach", 2010],
      ["Stiff", "Mary Roach", 2003],
      ["Hidden Figures", "Margot Lee Shetterly", 2016],
      ["The Right Stuff", "Tom Wolfe", 1979],
      ["Chaos", "James Gleick", 1987],
      ["The Information", "James Gleick", 2011],
      ["Genius", "James Gleick", 1992, "bio"],
      ["The Making of the Atomic Bomb", "Richard Rhodes", 1986],
      ["Quantum", "Manjit Kumar", 2008],
      ["Gödel, Escher, Bach", "Douglas R. Hofstadter", 1979, "phil"]
    ],

    medicine: [
      ["The Emperor of All Maladies", "Siddhartha Mukherjee", 2010],
      ["The Immortal Life of Henrietta Lacks", "Rebecca Skloot", 2010],
      ["Why We Sleep", "Matthew Walker", 2017],
      ["How Not to Die", "Michael Greger", 2015],
      ["The Checklist Manifesto", "Atul Gawande", 2009],
      ["Complications", "Atul Gawande", 2002],
      ["Better", "Atul Gawande", 2007],
      ["Do No Harm", "Henry Marsh", 2014, "bio"],
      ["Admissions", "Henry Marsh", 2017, "bio"],
      ["This Is Going to Hurt", "Adam Kay", 2017, "bio"],
      ["The Man Who Mistook His Wife for a Hat", "Oliver Sacks", 1985, "psych"],
      ["Awakenings", "Oliver Sacks", 1973],
      ["Musicophilia", "Oliver Sacks", 2007],
      ["An Anthropologist on Mars", "Oliver Sacks", 1995],
      ["The Brain That Changes Itself", "Norman Doidge", 2007, "psych"],
      ["Breath", "James Nestor", 2020],
      ["Lost Connections", "Johann Hari", 2018, "psych"],
      ["The Noonday Demon", "Andrew Solomon", 2001, "psych"],
      ["An Unquiet Mind", "Kay Redfield Jamison", 1995, "bio,psych"],
      ["How Doctors Think", "Jerome Groopman", 2007],
      ["Spillover", "David Quammen", 2012],
      ["The Great Influenza", "John M. Barry", 2004],
      ["The Demon Under the Microscope", "Thomas Hager", 2006],
      ["Mountains Beyond Mountains", "Tracy Kidder", 2003, "bio"],
      ["Genius Foods", "Max Lugavere", 2018],
      ["Fiber Fueled", "Will Bulsiewicz", 2020],
      ["The Obesity Code", "Jason Fung", 2016],
      ["Metabolical", "Robert H. Lustig", 2021],
      ["Cured", "Jeffrey Rediger", 2020],
      ["The Telomere Effect", "Elizabeth Blackburn & Elissa Epel", 2017],
      ["Gut", "Giulia Enders", 2014],
      ["When the Body Says No", "Gabor Maté", 2003, "psych"],
      ["The Myth of Normal", "Gabor Maté", 2022, "psych"]
    ],

    art: [
      ["Ways of Seeing", "John Berger", 1972],
      ["Show Your Work!", "Austin Kleon", 2014],
      ["Keep Going", "Austin Kleon", 2019, "self"],
      ["The War of Art", "Steven Pressfield", 2002, "self"],
      ["Big Magic", "Elizabeth Gilbert", 2015, "self"],
      ["The Artist's Way", "Julia Cameron", 1992, "self"],
      ["Bird by Bird", "Anne Lamott", 1994],
      ["On Writing", "Stephen King", 2000, "bio"],
      ["Art & Fear", "David Bayles & Ted Orland", 1993],
      ["Drawing on the Right Side of the Brain", "Betty Edwards", 1979],
      ["Color and Light", "James Gurney", 2010],
      ["Interaction of Color", "Josef Albers", 1963],
      ["Grid Systems in Graphic Design", "Josef Müller-Brockmann", 1981],
      ["Thinking with Type", "Ellen Lupton", 2004],
      ["Just My Type", "Simon Garfield", 2010],
      ["The Elements of Typographic Style", "Robert Bringhurst", 1992],
      ["Logo Design Love", "David Airey", 2009],
      ["A Smile in the Mind", "Beryl McAlhone & David Stuart", 1996],
      ["Emotional Design", "Don Norman", 2003],
      ["Sketching User Experiences", "Bill Buxton", 2007],
      ["Change by Design", "Tim Brown", 2009],
      ["Creative Confidence", "Tom Kelley & David Kelley", 2013],
      ["Design Is a Job", "Mike Monteiro", 2012],
      ["The Non-Designer's Design Book", "Robin Williams", 1994],
      ["Universal Principles of Design", "William Lidwell et al.", 2003],
      ["Gardner's Art Through the Ages", "Helen Gardner", 1926],
      ["The Shock of the New", "Robert Hughes", 1980],
      ["Seven Days in the Art World", "Sarah Thornton", 2008],
      ["Bauhaus", "Frank Whitford", 1984],
      ["Modern Architecture: A Critical History", "Kenneth Frampton", 1980],
      ["Towards a New Architecture", "Le Corbusier", 1923],
      ["Complexity and Contradiction in Architecture", "Robert Venturi", 1966],
      ["The Architecture of Happiness", "Alain de Botton", 2006, "phil"],
      ["The Creative Habit", "Twyla Tharp", 2003, "self"],
      ["Letters to a Young Poet", "Rainer Maria Rilke", 1929, "phil"]
    ],

    audio: [
      ["Open", "Andre Agassi", 2009, "bio"],
      ["Spare", "Prince Harry", 2023, "bio"],
      ["Bossypants", "Tina Fey", 2011, "bio"],
      ["Yes Please", "Amy Poehler", 2014, "bio"],
      ["Is Everyone Hanging Out Without Me?", "Mindy Kaling", 2011, "bio"],
      ["Born to Run", "Bruce Springsteen", 2016, "bio"],
      ["Greenlights", "Matthew McConaughey", 2020, "bio"],
      ["Finding Me", "Viola Davis", 2022, "bio"],
      ["Untamed", "Glennon Doyle", 2020, "bio,self"],
      ["Me", "Elton John", 2019, "bio"],
      ["Just Kids", "Patti Smith", 2010, "bio"],
      ["I'm Glad My Mom Died", "Jennette McCurdy", 2022, "bio"],
      ["Crying in H Mart", "Michelle Zauner", 2021, "bio"],
      ["The Glass Castle", "Jeannette Walls", 2005, "bio"],
      ["Wild", "Cheryl Strayed", 2012, "bio"],
      ["Eat, Pray, Love", "Elizabeth Gilbert", 2006, "bio,self"],
      ["Unbroken", "Laura Hillenbrand", 2010, "bio"],
      ["In Cold Blood", "Truman Capote", 1966],
      ["Into the Wild", "Jon Krakauer", 1996],
      ["Into Thin Air", "Jon Krakauer", 1997],
      ["The Boys in the Boat", "Daniel James Brown", 2013],
      ["Dopesick", "Beth Macy", 2018],
      ["The Splendid and the Vile", "Erik Larson", 2020],
      ["The Devil in the White City", "Erik Larson", 2003],
      ["Killers of the Flower Moon", "David Grann", 2017],
      ["The Wager", "David Grann", 2023],
      ["Alexander Hamilton", "Ron Chernow", 2004, "bio"],
      ["Grant", "Ron Chernow", 2017, "bio"],
      ["Team of Rivals", "Doris Kearns Goodwin", 2005, "bio"],
      ["The Diary of a Young Girl", "Anne Frank", 1947, "bio"],
      ["Night", "Elie Wiesel", 1956, "bio"],
      ["Long Walk to Freedom", "Nelson Mandela", 1994, "bio"],
      ["I Know Why the Caged Bird Sings", "Maya Angelou", 1969, "bio"],
      ["The Autobiography of Malcolm X", "Malcolm X & Alex Haley", 1965, "bio"],
      ["Hillbilly Elegy", "J.D. Vance", 2016, "bio"],
      ["Just Mercy", "Bryan Stevenson", 2014, "bio"],
      ["A Promised Land", "Barack Obama", 2020, "bio"],
      ["Dreams from My Father", "Barack Obama", 1995, "bio"],
      ["The Audacity of Hope", "Barack Obama", 2006],
      ["Heavy", "Kiese Laymon", 2018, "bio"]
    ]
  };

  /* =====================================================
     ISBNs FOR THE 450 EXTRA BOOKS
     Each book's real cover is requested straight from Open Library by ISBN,
     so covers appear like the first 50 (no waiting, no placeholder colours).
     Any ISBN that is missing, mistyped or has no cover falls back to a
     title search, and only then to a plain cream title card.
     To fix a wrong cover, change the ISBN here.
     ===================================================== */

  const ISBNS = {
    // Novel
    "Brave New World": "9780060850524",
    "Animal Farm": "9780451526342",
    "Jane Eyre": "9780141441146",
    "Wuthering Heights": "9780141439556",
    "Great Expectations": "9780141439563",
    "A Tale of Two Cities": "9780141439600",
    "Oliver Twist": "9780141439747",
    "David Copperfield": "9780140439441",
    "Moby-Dick": "9780142437247",
    "Frankenstein": "9780141439471",
    "Dracula": "9780141439846",
    "The Picture of Dorian Gray": "9780141439570",
    "Crime and Punishment": "9780143058144",
    "The Brothers Karamazov": "9780374528379",
    "War and Peace": "9781400079988",
    "Anna Karenina": "9780143035008",
    "Les Misérables": "9780451419439",
    "The Count of Monte Cristo": "9780140449266",
    "The Three Musketeers": "9780140449679",
    "Don Quixote": "9780060934347",
    "Madame Bovary": "9780140449129",
    "The Stranger": "9780679720201",
    "The Plague": "9780679720218",
    "The Trial": "9780805209990",
    "The Metamorphosis": "9780553213690",
    "One Hundred Years of Solitude": "9780060883287",
    "Love in the Time of Cholera": "9780307389732",
    "The Catcher in the Rye": "9780316769488",
    "Of Mice and Men": "9780140177398",
    "The Grapes of Wrath": "9780143039433",
    "East of Eden": "9780142000656",
    "Lord of the Flies": "9780399501487",
    "Fahrenheit 451": "9781451673319",
    "Catch-22": "9781451626643",
    "Slaughterhouse-Five": "9780385333849",
    "Beloved": "9781400033416",
    "The Color Purple": "9780156028356",
    "Their Eyes Were Watching God": "9780061120060",
    "Invisible Man": "9780679732761",
    "Things Fall Apart": "9780385474542",
    "The Handmaid's Tale": "9780385490818",
    "Rebecca": "9780380730407",
    "Little Women": "9780147514011",
    "Anne of Green Gables": "9780553213133",
    "The Secret Garden": "9780064401883",
    "Treasure Island": "9780141321004",
    "The Adventures of Huckleberry Finn": "9780142437179",
    "The Adventures of Tom Sawyer": "9780143039563",
    "Heart of Darkness": "9780486264646",
    "Ulysses": "9780679722762",
    "Mrs Dalloway": "9780151642601",
    "To the Lighthouse": "9780156907392",
    "The Sun Also Rises": "9780743297332",
    "The Old Man and the Sea": "9780684801223",
    "A Farewell to Arms": "9780684801469",
    "Lolita": "9780679723165",
    "Brideshead Revisited": "9780316926348",
    "The Remains of the Day": "9780679731726",
    "Never Let Me Go": "9781400078776",
    "Klara and the Sun": "9780593318171",
    "Life of Pi": "9780156027328",
    "The Kite Runner": "9781594631931",
    "A Thousand Splendid Suns": "9781594483851",
    "The Book Thief": "9780375842207",
    "The Road": "9780307387899",
    "No Country for Old Men": "9780375706677",
    "Gone Girl": "9780307588371",
    "The Girl with the Dragon Tattoo": "9780307454546",
    "The Da Vinci Code": "9780307474278",
    "The Shining": "9780307743657",
    "It": "9781501142970",
    "Misery": "9781501143106",
    "The Stand": "9780307743688",
    "Murder on the Orient Express": "9780062693662",
    "And Then There Were None": "9780062073488",
    "The Maltese Falcon": "9780679722649",
    "The Big Sleep": "9780394758282",
    "The Fellowship of the Ring": "9780547928210",
    "The Two Towers": "9780547928203",
    "The Return of the King": "9780547928197",
    "The Silmarillion": "9780618391110",
    "Harry Potter and the Sorcerer's Stone": "9780590353427",
    "Harry Potter and the Chamber of Secrets": "9780439064873",
    "Harry Potter and the Prisoner of Azkaban": "9780439136365",
    "Harry Potter and the Goblet of Fire": "9780439139601",
    "The Lion, the Witch and the Wardrobe": "9780064471046",
    "A Game of Thrones": "9780553593716",
    "The Name of the Wind": "9780756404741",
    "Mistborn: The Final Empire": "9780765377135",
    "The Way of Kings": "9780765365279",
    "American Gods": "9780062572110",
    "Neverwhere": "9780060557812",
    "Good Omens": "9780060853983",
    "The Hitchhiker's Guide to the Galaxy": "9780345391803",
    "Ender's Game": "9780812550702",
    "Foundation": "9780553293357",
    "I, Robot": "9780553382563",
    "Neuromancer": "9780441569595",
    "Snow Crash": "9780553380958",
    "The Left Hand of Darkness": "9780441478125",
    "A Wizard of Earthsea": "9780547773742",
    "Do Androids Dream of Electric Sheep?": "9780345404473",
    "The Martian": "9780553418026",
    "Ready Player One": "9780307887443",
    "The Hunger Games": "9780439023528",
    "Divergent": "9780062024039",
    "The Giver": "9780544336261",
    "The Time Machine": "9780486284729",
    "The War of the Worlds": "9780486295060",
    "The Three-Body Problem": "9780765382030",
    "Piranesi": "9781635575637",
    "The Song of Achilles": "9780062060624",
    "Circe": "9780316556347",
    "Normal People": "9781984822178",
    "Intermezzo": "9780374602635",
    "It Ends with Us": "9781501110368",
    "Verity": "9781538724736",
    "The Housemaid": "9781538742570",
    "Lessons in Chemistry": "9780385547345",
    "The Thursday Murder Club": "9781984880987",
    "Daisy Jones & The Six": "9781524798628",
    "Malibu Rising": "9781524798659",
    "The Silent Patient": "9781250301697",
    "Where'd You Go, Bernadette": "9780316204279",
    "A Man Called Ove": "9781476738024",
    "Anxious People": "9781501160837",
    "Eleanor Oliphant Is Completely Fine": "9780735220683",
    "The Nightingale": "9780312577223",
    "The Women": "9781250178633",
    "All the Light We Cannot See": "9781501173219",
    "Cloud Cuckoo Land": "9781982168438",
    "A Little Life": "9780804172707",
    "The Goldfinch": "9780316055437",
    "The Secret History": "9781400031702",
    "Station Eleven": "9780804172448",
    "The Overstory": "9780393635522",
    "Americanah": "9780307455925",
    "Half of a Yellow Sun": "9781400095209",
    "Pachinko": "9781455563937",
    "The Vanishing Half": "9780525536291",
    "Demon Copperhead": "9780063251922",
    "Tomorrow, and Tomorrow, and Tomorrow": "9780593321201",
    "Babel": "9780063021426",
    "Yellowface": "9780063250833",
    "The Poppy War": "9780062662569",
    "Iron Flame": "9781649374172",
    "A Court of Thorns and Roses": "9781635575569",
    "Throne of Glass": "9781619630345",
    "The Cruel Prince": "9780316310314",
    "Shadow and Bone": "9781250027436",
    "Six of Crows": "9781250076960",
    "Red Rising": "9780345539786",
    "The Priory of the Orange Tree": "9781635570298",
    "Hyperion": "9780553283686",
    "The Bell Jar": "9780061148514",
    "On the Road": "9780140283297",
    "Persuasion": "9780141439686",
    "Emma": "9780141439587",
    "Sense and Sensibility": "9780141439662",
    "Middlemarch": "9780141439549",
    "Siddhartha": "9780553208849",

    // Business
    "Thinking in Bets": "9780735216372",
    "The Hard Thing About Hard Things": "9780062273208",
    "Measure What Matters": "9780525536222",
    "Crossing the Chasm": "9780062292988",
    "The Innovator's Dilemma": "9780062060242",
    "Blue Ocean Strategy": "9781625274496",
    "Built to Last": "9780060566104",
    "Drive": "9781594484803",
    "To Sell Is Human": "9781594631900",
    "Influence": "9780061241895",
    "Never Split the Difference": "9780062407801",
    "Getting to Yes": "9780143118756",
    "Crucial Conversations": "9780071771320",
    "The Five Dysfunctions of a Team": "9780787960759",
    "Leaders Eat Last": "9781591848011",
    "The Infinite Game": "9780735213500",
    "Dare to Lead": "9780399592522",
    "Multipliers": "9780061964398",
    "The Effective Executive": "9780060833459",
    "High Output Management": "9780679762881",
    "Only the Paranoid Survive": "9780385483827",
    "Rework": "9780307463746",
    "The Mom Test": "9781492180746",
    "Traction": "9781591848363",
    "Hooked": "9781591847786",
    "Contagious": "9781451686586",
    "Made to Stick": "9781400064281",
    "Switch": "9780385528757",
    "Good Strategy Bad Strategy": "9780307886231",
    "Playing to Win": "9781422187395",
    "The Goal": "9780884271789",
    "The Phoenix Project": "9781942788294",
    "Shoe Dog": "9781501135910",
    "Elon Musk": "9781982181284",
    "Steve Jobs": "9781451648539",
    "Bad Blood": "9781524731656",
    "Billion Dollar Whale": "9780316436502",
    "The Everything Store": "9780316219280",
    "Grit": "9781501111112",
    "Mindset": "9780345472328",
    "Essentialism": "9780804137386",
    "The 4-Hour Workweek": "9780307465351",
    "Tools of Titans": "9781328683786",
    "The Power of Now": "9781577314806",
    "Extreme Ownership": "9781250183866",
    "The Obstacle Is the Way": "9781591846352",
    "Ego Is the Enemy": "9781591847816",
    "Purple Cow": "9781591843535",
    "This Is Marketing": "9780525540830",
    "Building a StoryBrand": "9780718033323",

    // Financial
    "The Little Book of Common Sense Investing": "9781119404507",
    "A Random Walk Down Wall Street": "9781324002185",
    "One Up on Wall Street": "9780743200400",
    "The Bogleheads' Guide to Investing": "9780470067901",
    "Security Analysis": "9780071592536",
    "Common Stocks and Uncommon Profits": "9780471445500",
    "Reminiscences of a Stock Operator": "9780470481592",
    "Principles for Dealing with the Changing World Order": "9781982160272",
    "The Total Money Makeover": "9781595555274",
    "Your Money or Your Life": "9780143115762",
    "I Will Teach You to Be Rich": "9781523505746",
    "The Richest Man in Babylon": "9780451205360",
    "Think and Grow Rich": "9781585424337",
    "Broke Millennial": "9780143131168",
    "Secrets of the Millionaire Mind": "9780060763282",
    "The Black Swan": "9780812973815",
    "Fooled by Randomness": "9780812975215",
    "Antifragile": "9780812979688",
    "Skin in the Game": "9780425284629",
    "The Big Short": "9780393338829",
    "Liar's Poker": "9780393338690",
    "Flash Boys": "9780393351590",
    "Too Big to Fail": "9780143118121",
    "Capital in the Twenty-First Century": "9780674430006",
    "The Wealth of Nations": "9780553585971",
    "Freakonomics": "9780060731335",
    "Misbehaving": "9780393352825",
    "Nudge": "9780143115267",
    "Poor Charlie's Almanack": "9781578645015",

    // Technology
    "Refactoring": "9780134757599",
    "Design Patterns": "9780201633610",
    "Code Complete": "9780735619678",
    "The Mythical Man-Month": "9780201835953",
    "Introduction to Algorithms": "9780262033848",
    "The Art of Computer Programming": "9780201896831",
    "Structure and Interpretation of Computer Programs": "9780262510875",
    "The C Programming Language": "9780131103627",
    "Eloquent JavaScript": "9781593279509",
    "You Don't Know JS": "9781491924464",
    "JavaScript: The Good Parts": "9780596517748",
    "Fluent Python": "9781491946008",
    "Python Crash Course": "9781593279288",
    "Automate the Boring Stuff with Python": "9781593275990",
    "Effective Java": "9780134685991",
    "Head First Design Patterns": "9780596007126",
    "The Clean Coder": "9780137081073",
    "Clean Architecture": "9780134494166",
    "Domain-Driven Design": "9780321125217",
    "Working Effectively with Legacy Code": "9780131177055",
    "Site Reliability Engineering": "9781491929124",
    "Accelerate": "9781942788331",
    "The DevOps Handbook": "9781942788003",
    "Release It!": "9781680502398",
    "Deep Learning": "9780262035613",
    "Hands-On Machine Learning": "9781491962299",
    "Artificial Intelligence: A Modern Approach": "9780136042594",
    "Superintelligence": "9780198739838",
    "Life 3.0": "9781101946596",
    "The Alignment Problem": "9780393635829",
    "Human Compatible": "9780525558613",
    "AI Superpowers": "9781328546395",
    "The Age of Surveillance Capitalism": "9781610395694",
    "Weapons of Math Destruction": "9780553418811",
    "Code": "9780735611313",
    "The Soul of a New Machine": "9780316491976",
    "Hackers": "9781449388393",
    "The Cuckoo's Egg": "9781416507789",
    "Ghost in the Wires": "9780316037709",
    "Permanent Record": "9781250237231",
    "Don't Make Me Think": "9780321965516",
    "Algorithms to Live By": "9781627790369",
    "Grokking Algorithms": "9781617292231",
    "Cracking the Coding Interview": "9780984782857",
    "The Linux Command Line": "9781593279523",
    "The Rust Programming Language": "9781718503106",

    // Science
    "On the Origin of Species": "9780140432053",
    "The Double Helix": "9780743216302",
    "Silent Spring": "9780618249060",
    "The Structure of Scientific Revolutions": "9780226458120",
    "Surely You're Joking, Mr. Feynman!": "9780393355628",
    "The Feynman Lectures on Physics": "9780465024933",
    "Six Easy Pieces": "9780465025275",
    "A Short History of Nearly Everything": "9780767908184",
    "The Elegant Universe": "9780393338102",
    "The Fabric of the Cosmos": "9780375727207",
    "The Grand Design": "9780553384666",
    "Brief Answers to the Big Questions": "9781984819192",
    "Black Holes and Baby Universes": "9780553374117",
    "Pale Blue Dot": "9780345376596",
    "The Demon-Haunted World": "9780345409461",
    "Astrophysics for People in a Hurry": "9780393609394",
    "Death by Black Hole": "9780393330168",
    "The Order of Time": "9780735216105",
    "Seven Brief Lessons on Physics": "9780399184413",
    "Reality Is Not What It Seems": "9780735213937",
    "The Blind Watchmaker": "9780393315707",
    "The Greatest Show on Earth": "9781416594796",
    "The God Delusion": "9780618918249",
    "Guns, Germs, and Steel": "9780393354324",
    "Collapse": "9780143117001",
    "The Third Chimpanzee": "9780060845506",
    "The Gene": "9781476733524",
    "Genome": "9780060894085",
    "The Red Queen": "9780060556570",
    "The Rational Optimist": "9780061452062",
    "Behave": "9780143110910",
    "Why Zebras Don't Get Ulcers": "9780805073690",
    "The Sixth Extinction": "9781250062185",
    "Under a White Sky": "9780525575481",
    "The Hidden Life of Trees": "9781771642484",
    "Entangled Life": "9780525510314",
    "I Contain Multitudes": "9780062368591",
    "An Immense World": "9780593133231",
    "The Soul of an Octopus": "9781451697728",
    "Packing for Mars": "9780393339918",
    "Stiff": "9780393324822",
    "Hidden Figures": "9780062363602",
    "The Right Stuff": "9780312427566",
    "Chaos": "9780143113454",
    "The Information": "9781400096237",
    "Genius": "9780679747048",
    "The Making of the Atomic Bomb": "9781451677614",
    "Quantum": "9780393339888",
    "Gödel, Escher, Bach": "9780465026562",

    // Medicine
    "The Emperor of All Maladies": "9781439107959",
    "The Immortal Life of Henrietta Lacks": "9781400052189",
    "Why We Sleep": "9781501144325",
    "How Not to Die": "9781250066114",
    "The Checklist Manifesto": "9780312430009",
    "Complications": "9780312421700",
    "Better": "9780312427658",
    "Do No Harm": "9781250058614",
    "This Is Going to Hurt": "9780316349314",
    "The Man Who Mistook His Wife for a Hat": "9781501147555",
    "Awakenings": "9780375704055",
    "Musicophilia": "9781400033539",
    "An Anthropologist on Mars": "9780679756972",
    "The Brain That Changes Itself": "9780143113102",
    "Breath": "9780735213616",
    "Lost Connections": "9781632865779",
    "An Unquiet Mind": "9780679763307",
    "How Doctors Think": "9780547053646",
    "Spillover": "9780393346619",
    "The Great Influenza": "9780143036494",
    "The Demon Under the Microscope": "9781400081387",
    "Mountains Beyond Mountains": "9780812973013",
    "Genius Foods": "9780062562456",
    "The Obesity Code": "9781771641258",
    "The Telomere Effect": "9781455587964",
    "Gut": "9781771642507",
    "When the Body Says No": "9780470923351",

    // Art & Design
    "Ways of Seeing": "9780141035796",
    "Show Your Work!": "9780761178972",
    "Keep Going": "9781523505593",
    "The War of Art": "9781936891023",
    "Big Magic": "9781594634727",
    "The Artist's Way": "9780143129257",
    "Bird by Bird": "9780385480017",
    "On Writing": "9781439156810",
    "Art & Fear": "9780961454739",
    "Drawing on the Right Side of the Brain": "9781585429202",
    "Color and Light": "9780740797712",
    "Interaction of Color": "9780300179354",
    "Grid Systems in Graphic Design": "9783721201451",
    "Thinking with Type": "9781616890568",
    "Just My Type": "9781592406531",
    "The Elements of Typographic Style": "9780881792126",
    "Logo Design Love": "9780321985071",
    "Emotional Design": "9780465051366",
    "Sketching User Experiences": "9780123740373",
    "Change by Design": "9780061766084",
    "Creative Confidence": "9780385349369",
    "The Non-Designer's Design Book": "9780133966152",
    "Universal Principles of Design": "9781592535873",
    "Towards a New Architecture": "9780486250236",
    "Complexity and Contradiction in Architecture": "9780870702822",
    "The Creative Habit": "9780743235273",
    "Letters to a Young Poet": "9780393310399",

    // Audio Books / memoirs
    "Open": "9780307388407",
    "Spare": "9780593593806",
    "Bossypants": "9780316056861",
    "Yes Please": "9780062267160",
    "Is Everyone Hanging Out Without Me?": "9780307886576",
    "Born to Run": "9781501141515",
    "Greenlights": "9780593139134",
    "Untamed": "9781984801258",
    "Me": "9781250147615",
    "Just Kids": "9780060936228",
    "I'm Glad My Mom Died": "9781982185824",
    "Crying in H Mart": "9780525657743",
    "The Glass Castle": "9780743247542",
    "Wild": "9780307476074",
    "Eat, Pray, Love": "9780143038412",
    "Unbroken": "9780812974492",
    "In Cold Blood": "9780679745587",
    "Into the Wild": "9780385486804",
    "Into Thin Air": "9780385494786",
    "The Boys in the Boat": "9780143125471",
    "Dopesick": "9780316527156",
    "The Splendid and the Vile": "9780385348713",
    "The Devil in the White City": "9780375725609",
    "Killers of the Flower Moon": "9780307742483",
    "The Wager": "9780385534260",
    "Alexander Hamilton": "9780143034759",
    "Grant": "9781594204876",
    "Team of Rivals": "9780743270755",
    "The Diary of a Young Girl": "9780553296983",
    "Night": "9780374500016",
    "Long Walk to Freedom": "9780316548182",
    "I Know Why the Caged Bird Sings": "9780345514400",
    "The Autobiography of Malcolm X": "9780345350688",
    "Hillbilly Elegy": "9780062300546",
    "Just Mercy": "9780812994841",
    "A Promised Land": "9781524763169",
    "Dreams from My Father": "9781400082773",
    "The Audacity of Hope": "9780307455871",
    "Heavy": "9781501125676"
  };

  // an ISBN-13 is only used if its check digit is correct (catches typos)
  const validIsbn13 = code =>
    /^\d{13}$/.test(code) &&
    [...code].reduce((sum, digit, i) => sum + Number(digit) * (i % 2 ? 3 : 1), 0) % 10 === 0;

  const CATEGORY_PRICE = {
    technology: [29, 55], art: [18, 40], medicine: [15, 30], science: [15, 30],
    business: [15, 30], financial: [12, 28], audio: [14, 28], novel: [10, 24]
  };

  function titleHash(title) {
    let h = 0;
    for (const c of title) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    return h;
  }

  const autoPrice = (title, category) => {
    const [lo, hi] = CATEGORY_PRICE[category];
    return Math.floor(lo + ((titleHash(title) % 1000) / 1000) * (hi - lo)) + 0.99;
  };

  const autoBadge = year => (year >= 2023 ? "latest" : year <= 1999 ? "classic" : "hot");

  // the first 50 rows above are the hand-picked bestsellers (with real ISBNs)
  const baseBooks = rows.map(r => ({
    title: r[0],
    author: r[1],
    category: r[2],
    badge: r[3],
    year: r[4],
    price: r[5],
    isbn: r[6],
    tags: r[7] || []
  }));

  const extraBooks = [];
  Object.keys(EXTRA).forEach(category => {
    EXTRA[category].forEach(r => {
      extraBooks.push({
        title: r[0],
        author: r[1],
        category,
        badge: autoBadge(r[2]),
        year: r[2],
        price: autoPrice(r[0], category),
        isbn: validIsbn13(ISBNS[r[0]] || "") ? ISBNS[r[0]] : null, // no ISBN: cover is looked up by title
        tags: r[3] ? r[3].split(",") : []
      });
    });
  });

  // 500 books in total
  const BOOKS = baseBooks.concat(extraBooks).map((book, id) => Object.assign({ id }, book));
  const FEATURED = BOOKS.slice(0, 50); // moving shelf + bestseller carousel

  const BADGES = { latest: "Latest Release", hot: "Hot", classic: "Classic" };
  // Discounted books. Weekly Offer = Classics, Membership deals = newest releases.
  const DISCOUNTS = { classic: 0.2, latest: 0.15 };
  const discountOf = book => DISCOUNTS[book.badge] || 0;

  const FILTERS = {
    art:        { label: "Art & Design",          icon: "palette",                test: b => b.category === "art" },
    technology: { label: "IT & Technology",       icon: "monitor",                test: b => b.category === "technology" },
    financial:  { label: "Financial",             icon: "circle-dollar-sign",     test: b => b.category === "financial" },
    audio:      { label: "Audio Books",           icon: "headphones",             test: b => b.category === "audio" },
    business:   { label: "Business",              icon: "chart-no-axes-combined", test: b => b.category === "business" },
    novel:      { label: "Novel",                 icon: "book-open",              test: b => b.category === "novel" },
    medicine:   { label: "Medicine",              icon: "briefcase-medical",      test: b => b.category === "medicine" },
    science:    { label: "Science",               icon: "flask-conical",          test: b => b.category === "science" },
    self:       { label: "Self-Help & Growth",    icon: "lightbulb",              test: b => b.tags.includes("self") },
    bio:        { label: "Biography & Memoir",    icon: "user-round",             test: b => b.tags.includes("bio") },
    scifi:      { label: "Fantasy & Sci-Fi",      icon: "rocket",                 test: b => b.tags.includes("scifi") },
    classic:    { label: "Classics",              icon: "scroll-text",            test: b => b.badge === "classic" },
    latest:     { label: "Latest Releases",       icon: "sparkles",               test: b => b.badge === "latest" },
    hot:        { label: "Hot Picks",             icon: "flame",                  test: b => b.badge === "hot" },
    psych:      { label: "Psychology & Mind",     icon: "brain",                  test: b => b.tags.includes("psych") },
    lead:       { label: "Leadership & Startups", icon: "target",                 test: b => b.tags.includes("lead") },
    drama:      { label: "Romance & Drama",       icon: "heart",                  test: b => b.tags.includes("drama") },
    phil:       { label: "Philosophy & Life",     icon: "compass",                test: b => b.tags.includes("phil") },
    all:        { label: "All Books",             icon: "library",                test: () => true }
  };

  // exactly 18 categories
  const CATEGORY_KEYS = [
    "art", "technology", "financial", "audio", "business", "novel",
    "medicine", "science", "self", "bio", "scifi", "classic",
    "latest", "hot", "psych", "lead", "drama", "phil"
  ];

  const booksFor = key => BOOKS.filter(FILTERS[key].test);
  const money = n => "$" + n.toFixed(2);
  const effectivePrice = b => b.price * (1 - discountOf(b));

  function priceHTML(book) {
    if (discountOf(book)) {
      return `<del>${money(book.price)}</del> ${money(effectivePrice(book))}`;
    }
    return money(book.price);
  }

  const coverUrl = (book, size = "M") =>
    `https://covers.openlibrary.org/b/isbn/${book.isbn}-${size}.jpg?default=false`;

  /* =====================================================
     STORAGE, ACCOUNTS, CART, FAVORITES
     Everything is kept in this browser's localStorage.
     (Front-end demo only: connect to a real backend for production.)
     ===================================================== */

  const store = {
    load(key, fallback) {
      try {
        const value = JSON.parse(localStorage.getItem(key));
        return value === null || value === undefined ? fallback : value;
      } catch (err) {
        return fallback;
      }
    },
    save(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (err) {
        return false;
      }
    }
  };

  let users = store.load("authore.users", {});
  if (!users || typeof users !== "object") users = {};

  let sessionEmail = store.load("authore.session", null);
  if (sessionEmail && !users[sessionEmail]) sessionEmail = null;

  const keyFor = email => "authore.data." + (email || "guest");

  function loadFor(email) {
    const d = store.load(keyFor(email), {}) || {};
    return { cart: d.cart || {}, favs: d.favs || [] };
  }

  let state = loadFor(sessionEmail);

  const persist = () => store.save(keyFor(sessionEmail), state);
  const currentUser = () => (sessionEmail ? users[sessionEmail] : null);
  const initials = name =>
    name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase() || "?";

  // SHA-256 written in plain JavaScript, so the same password always gives the
  // same hash, whether or not the page runs in a "secure context" (crypto.subtle).
  const SHA_K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];

  function sha256Hex(text) {
    const bytes = new TextEncoder().encode(text);
    const length = bytes.length;
    const padded = new Uint8Array(((length + 9 + 63) >> 6) << 6);
    padded.set(bytes);
    padded[length] = 0x80;

    const view = new DataView(padded.buffer);
    view.setUint32(padded.length - 8, Math.floor((length * 8) / 0x100000000));
    view.setUint32(padded.length - 4, (length * 8) >>> 0);

    let hash = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const w = new Uint32Array(64);
    const rotr = (x, n) => (x >>> n) | (x << (32 - n));

    for (let offset = 0; offset < padded.length; offset += 64) {
      for (let i = 0; i < 16; i++) w[i] = view.getUint32(offset + i * 4);
      for (let i = 16; i < 64; i++) {
        const s0 = rotr(w[i - 15], 7) ^ rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
        const s1 = rotr(w[i - 2], 17) ^ rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
        w[i] = (w[i - 16] + s0 + w[i - 7] + s1) >>> 0;
      }

      let [a, b, c, d, e, f, g, h] = hash;
      for (let i = 0; i < 64; i++) {
        const S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
        const ch = (e & f) ^ (~e & g);
        const t1 = (h + S1 + ch + SHA_K[i] + w[i]) >>> 0;
        const S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
        const maj = (a & b) ^ (a & c) ^ (b & c);
        const t2 = (S0 + maj) >>> 0;
        h = g; g = f; f = e; e = (d + t1) >>> 0;
        d = c; c = b; b = a; a = (t1 + t2) >>> 0;
      }

      hash = [hash[0] + a, hash[1] + b, hash[2] + c, hash[3] + d,
              hash[4] + e, hash[5] + f, hash[6] + g, hash[7] + h].map(x => x >>> 0);
    }

    return hash.map(x => x.toString(16).padStart(8, "0")).join("");
  }

  async function hashPassword(password, salt) {
    return sha256Hex(salt + ":" + password);
  }

  // the old fallback hash that some accounts may have been saved with
  function legacyHash(text) {
    let h = 5381;
    for (const c of text) h = ((h << 5) + h + c.charCodeAt(0)) >>> 0;
    return "x" + h.toString(16);
  }

  // always work with the latest saved accounts (another tab or an earlier visit may have added some)
  function refreshUsers() {
    const stored = store.load("authore.users", {});
    if (stored && typeof stored === "object") users = Object.assign({}, users, stored);
  }

  // true when the typed password belongs to this account
  async function checkPassword(user, password) {
    const variants = password !== password.trim() ? [password, password.trim()] : [password];

    for (const variant of variants) {
      const modern = await hashPassword(variant, user.salt);
      if (modern === user.hash) return true;

      // account saved with the old fallback hash: accept it once, then upgrade it
      if (String(user.hash).startsWith("x") && legacyHash(user.salt + ":" + variant) === user.hash) {
        user.hash = modern;
        store.save("authore.users", users);
        return true;
      }
    }
    return false;
  }

  const newSalt = () => Math.random().toString(36).slice(2) + Date.now().toString(36);

  function signIn(email) {
    const guest = loadFor(null);
    sessionEmail = email;
    store.save("authore.session", email);

    // bring anything added as a guest into the account
    const mine = loadFor(email);
    Object.entries(guest.cart).forEach(([id, qty]) => {
      mine.cart[id] = (mine.cart[id] || 0) + qty;
    });
    guest.favs.forEach(id => {
      if (!mine.favs.includes(id)) mine.favs.push(id);
    });

    state = mine;
    persist();
    store.save(keyFor(null), { cart: {}, favs: [] });
    updateBadges();
  }

  function signOut() {
    sessionEmail = null;
    store.save("authore.session", null);
    state = loadFor(null);
    updateBadges();
  }

  // --- cart
  const MEMBER_DISCOUNT = { member: 10, bookworm: 5, collector: 10 };
  const FREE_DELIVERY_FROM = { member: 25, collector: 0, bookworm: 25 }; // everyone else: 40
  const DELIVERY_FEE = 3.99;

  function addToCart(id) {
    state.cart[id] = (state.cart[id] || 0) + 1;
    persist();
    updateBadges();
    notify(`${BOOKS[id].title} added to cart`);
  }

  function changeQty(id, delta) {
    const next = (state.cart[id] || 0) + delta;
    if (next <= 0) delete state.cart[id];
    else state.cart[id] = Math.min(next, 99);
    persist();
    updateBadges();
  }

  function removeFromCart(id) {
    delete state.cart[id];
    persist();
    updateBadges();
  }

  function cartTotals() {
    const items = Object.entries(state.cart)
      .filter(([, qty]) => qty > 0)
      .map(([id, qty]) => ({ book: BOOKS[Number(id)], qty }));

    const count = items.reduce((n, i) => n + i.qty, 0);
    const subtotal = items.reduce((n, i) => n + effectivePrice(i.book) * i.qty, 0);
    const plan = currentUser() ? currentUser().plan : null;
    const pct = MEMBER_DISCOUNT[plan] || 0;
    const memberOff = (subtotal * pct) / 100;
    const after = subtotal - memberOff;
    const threshold = FREE_DELIVERY_FROM[plan] !== undefined ? FREE_DELIVERY_FROM[plan] : 40;
    const delivery = count && after < threshold ? DELIVERY_FEE : 0;

    return { items, count, subtotal, pct, memberOff, delivery, threshold, plan, total: after + delivery };
  }

  // --- favorites
  function toggleFavorite(id) {
    const index = state.favs.indexOf(id);
    if (index >= 0) {
      state.favs.splice(index, 1);
      notify(`${BOOKS[id].title} removed from favorites`);
    } else {
      state.favs.push(id);
      notify(`${BOOKS[id].title} added to favorites`);
    }
    persist();
    updateBadges();
  }

  // --- header / top bar
  const cartCountEl = document.getElementById("cartCount");
  const favCountEl = document.getElementById("favCount");
  const accountLabel = document.getElementById("accountLabel");

  function updateBadges() {
    const user = currentUser();
    cartCountEl.textContent = Object.values(state.cart).reduce((n, q) => n + q, 0);
    favCountEl.textContent = state.favs.length;
    favCountEl.hidden = state.favs.length === 0;

    // "My Account" becomes the user's name once logged in
    accountLabel.textContent = user ? user.name : "My Account";
    document.body.classList.toggle("logged-in", Boolean(user));
  }

  /* =====================================================
     COVER FALLBACK  (any <img data-title="..."> that fails to load)
     ===================================================== */

  // Plain cream title card. It is only shown when no real cover can be found
  // (ISBN failed AND the title search found nothing).
  function fallbackCover(title) {
    const lines = [];
    let line = "";
    title.split(" ").forEach(word => {
      if ((line + " " + word).trim().length > 13) {
        lines.push(line.trim());
        line = word;
      } else {
        line = (line + " " + word).trim();
      }
    });
    if (line) lines.push(line);

    const shown = lines.slice(0, 5);
    const startY = 150 - (shown.length - 1) * 14;
    const text = shown
      .map((l, i) =>
        `<text x="100" y="${startY + i * 28}" text-anchor="middle" fill="#292824" font-family="Georgia,serif" font-size="19" font-weight="700">${esc(l)}</text>`)
      .join("");

    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300" viewBox="0 0 200 300">` +
      `<rect width="200" height="300" fill="#efede6"/>` +
      `<rect x="10" y="10" width="180" height="280" fill="none" stroke="#c9c5b8"/>` +
      `<line x1="70" y1="${startY - 34}" x2="130" y2="${startY - 34}" stroke="#b96068" stroke-width="2"/>` +
      text + `</svg>`;

    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  function applyFallback(img) {
    if (img.dataset.fallback) return;
    img.dataset.fallback = "1";
    img.src = fallbackCover(img.dataset.title || img.alt || "Book");

    // the ISBN cover failed: last chance is a search by title and author
    if (img.dataset.id && !img.dataset.lookup) {
      img.dataset.lookup = img.dataset.id;
      queueCover(img);
    }
  }

  // capture phase: image load/error events do not bubble
  document.addEventListener("error", e => {
    if (e.target instanceof HTMLImageElement && e.target.dataset.title) applyFallback(e.target);
  }, true);

  document.addEventListener("load", e => {
    const img = e.target;
    if (img instanceof HTMLImageElement && img.dataset.title && !img.dataset.fallback && img.naturalWidth <= 10) {
      applyFallback(img); // Open Library sometimes returns a 1x1 placeholder
    }
  }, true);

  // <img> attributes for a book: real ISBN cover, or a generated cover that
  // is upgraded to the real one (found by title/author) when it scrolls into view
  function imgAttrs(book, size = "M") {
    const title = esc(book.title);
    if (book.isbn) {
      return `src="${coverUrl(book, size)}" data-title="${title}" data-id="${book.id}" data-size="${size}"`;
    }
    return `src="${fallbackCover(book.title)}" data-title="${title}" data-id="${book.id}" data-fallback="1" data-lookup="${book.id}" data-size="${size}"`;
  }

  /* =====================================================
     REAL COVERS FOR BOOKS WITHOUT AN ISBN
     Looks the book up on Open Library, one request at a time.
     Results are remembered in this browser. If nothing is found
     the generated title cover stays.
     ===================================================== */

  const coverCache = store.load("authore.covers", {}) || {};
  const lookupQueue = [];
  let lookupBusy = false;
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const hasCached = id => Object.prototype.hasOwnProperty.call(coverCache, id);

  async function findCoverId(book) {
    if (hasCached(book.id)) return coverCache[book.id];

    try {
      const author = book.author.split(/ & |, /)[0];
      const url = "https://openlibrary.org/search.json?limit=1&fields=cover_i" +
        "&title=" + encodeURIComponent(book.title) +
        "&author=" + encodeURIComponent(author);
      const response = await fetch(url);
      if (!response.ok) return null; // e.g. rate limited: try again next time

      const data = await response.json();
      const doc = data.docs && data.docs[0];
      coverCache[book.id] = doc && doc.cover_i ? doc.cover_i : null;
      store.save("authore.covers", coverCache);
      return coverCache[book.id];
    } catch (err) {
      return null;
    }
  }

  async function runLookups() {
    lookupBusy = true;

    while (lookupQueue.length) {
      const img = lookupQueue.shift();
      if (!img.isConnected) continue;

      const book = BOOKS[Number(img.dataset.lookup)];
      const wasCached = hasCached(book.id);
      const coverId = await findCoverId(book);

      if (coverId && img.isConnected) {
        const size = img.dataset.size === "L" ? "L" : "M";
        const real = `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg?default=false`;
        const probe = new Image();
        probe.onload = () => {
          if (probe.naturalWidth > 10) img.src = real;
        };
        probe.src = real;
      }

      if (!wasCached) await sleep(200);
    }

    lookupBusy = false;
  }

  function queueCover(img) {
    if (img.dataset.queued) return;
    img.dataset.queued = "1";
    lookupQueue.push(img);
    if (!lookupBusy) runLookups();
  }

  const coverObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            coverObserver.unobserve(entry.target);
            queueCover(entry.target);
          }
        });
      }, { rootMargin: "150px" })
    : null;

  function watchCovers(root) {
    root.querySelectorAll("img[data-lookup]").forEach(img => {
      if (coverObserver) coverObserver.observe(img);
      else queueCover(img);
    });
  }

  /* =====================================================
     BOOK CARD MARKUP
     ===================================================== */

  function bookCard(book) {
    const title = esc(book.title);
    return `
      <article class="book-card" tabindex="0" role="button" data-book="${book.id}" aria-label="View details for ${title}">
        <div class="cover">
          <span class="ribbon ${book.badge}">${BADGES[book.badge]}</span>
          <img ${imgAttrs(book)} alt="${title} cover" loading="lazy">
        </div>
        <p class="price">${priceHTML(book)}</p>
        <h3>${title}</h3>
        <p class="author">By ${esc(book.author)}</p>
      </article>`;
  }

  /* =====================================================
     POPUP (shared modal with a back stack)
     Each stack entry is a function that builds the view,
     so a view can be re-drawn with fresh data (cart, favorites...).
     ===================================================== */

  const modalEl = document.getElementById("modal");
  const modalPanel = document.getElementById("modalPanel");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const modalBack = document.getElementById("modalBack");
  const modalClose = document.getElementById("modalClose");

  let stack = [];
  let cleanup = null;
  let lastFocus = null;
  let pendingAuth = null; // what to do right after a guest logs in / creates an account

  function renderTop() {
    if (cleanup) { cleanup(); cleanup = null; }
    const view = stack[stack.length - 1]();

    modalTitle.textContent = view.title;
    modalTitle.className = view.titleClass || "";
    modalPanel.className = "modal-panel " + (view.size || "") + (view.glass ? " glass" : "");
    modalEl.classList.toggle("glass-open", Boolean(view.glass));
    modalBack.hidden = stack.length < 2;
    modalPanel.setAttribute("aria-label", view.label || view.title || "Dialog");
    modalBody.innerHTML = view.html;
    modalBody.scrollTop = 0;
    refreshIcons();
    watchCovers(modalBody);

    if (view.mount) cleanup = view.mount(modalBody) || null;
  }

  // redraw the current view but keep the scroll position
  function rerender() {
    if (!stack.length) return;
    const top = modalBody.scrollTop;
    renderTop();
    modalBody.scrollTop = top;
  }

  function pushView(builder) {
    if (modalEl.hidden) {
      lastFocus = document.activeElement;
      stack = [];
      modalEl.hidden = false;
      document.documentElement.classList.add("modal-open");
    }
    stack.push(builder);
    renderTop();
    modalClose.focus();
  }

  function replaceView(builder) {
    stack[stack.length - 1] = builder;
    renderTop();
  }

  function popView() {
    pendingAuth = null; // leaving the log in box cancels the waiting action
    if (stack.length > 1) {
      stack.pop();
      renderTop();
    }
  }

  function closeModal() {
    if (cleanup) { cleanup(); cleanup = null; }
    pendingAuth = null;
    stack = [];
    modalEl.hidden = true;
    modalEl.classList.remove("glass-open");
    modalBody.innerHTML = "";
    document.documentElement.classList.remove("modal-open");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  modalClose.addEventListener("click", closeModal);
  modalBack.addEventListener("click", popView);
  modalEl.addEventListener("click", e => {
    if (e.target === modalEl) closeModal();
  });

  /* =====================================================
     VIEWS
     ===================================================== */

  // --- category tiles (used on the page and in the popup)
  function tile(key) {
    const f = FILTERS[key];
    return `<button type="button" class="category-card" data-filter="${key}">
      <i data-lucide="${f.icon}"></i>
      <span><b>${esc(f.label)}</b><small>${booksFor(key).length} Books</small></span>
    </button>`;
  }

  function categoriesView() {
    return {
      title: "",
      glass: true,
      label: "All categories",
      size: "medium",
      html: `<div class="tile-grid">${CATEGORY_KEYS.map(tile).join("")}</div>`
    };
  }

  // --- a list of books (no title, no filter bar)
  function resultsView(title, books, options = {}) {
    return {
      title,
      glass: true,
      label: options.label,
      html: `
        ${options.intro || ""}
        <div class="modal-grid">${books.map(bookCard).join("")}</div>
        <p class="list-empty" ${books.length ? "hidden" : ""}>No books found. Try another title.</p>`
    };
  }

  const listView = key => resultsView("", booksFor(key), { label: FILTERS[key].label });

  // short promo text under a discounted book
  function discountNote(book) {
    const d = discountOf(book);
    if (!d) return "";

    const user = currentUser();
    const member = Boolean(user && MEMBER_DISCOUNT[user.plan]);
    const what = book.badge === "classic" ? "all Classic titles" : "the newest releases";

    return `<p class="offer-note">${Math.round(d * 100)}% off ${what}. ${
      member
        ? "Your member savings take another 10% off in your cart."
        : "Buy a discounted book and unlock member savings: 10% off everything."
    }</p>`;
  }

  // --- single book (with Add to Cart + Add to Favorites)
  function detailView(id) {
    const b = BOOKS[id];
    const title = esc(b.title);
    const tagLabels = [BADGES[b.badge], FILTERS[b.category].label]
      .concat(b.tags.map(t => FILTERS[t].label));
    const related = BOOKS.filter(x => x.category === b.category && x.id !== b.id).slice(0, 4);
    const isFav = state.favs.includes(b.id);
    const inCart = state.cart[b.id] || 0;

    return {
      title: "",
      label: "Book details",
      glass: true,
      html: `
        <div class="detail">
          <div class="detail-cover">
            <span class="ribbon ${b.badge}">${BADGES[b.badge]}</span>
            <img ${imgAttrs(b, "L")} alt="${title} cover">
          </div>
          <div class="detail-info">
            <span class="pill ${b.badge}">${BADGES[b.badge]}</span>
            <h3>${title}</h3>
            <p class="detail-author">By ${esc(b.author)}</p>
            <dl class="detail-meta">
              <div><dt>Category</dt><dd>${esc(FILTERS[b.category].label)}</dd></div>
              <div><dt>First published</dt><dd>${b.year}</dd></div>
              <div><dt>Collections</dt><dd>${tagLabels.map(esc).join(" · ")}</dd></div>
              <div><dt>Price</dt><dd class="price">${priceHTML(b)}</dd></div>
            </dl>
            ${discountNote(b)}
            <div class="detail-actions">
              <button type="button" class="btn" data-add-cart="${b.id}"><i data-lucide="shopping-bag"></i> Add to Cart</button>
              <button type="button" class="btn ghost ${isFav ? "is-fav" : ""}" data-fav-toggle="${b.id}">
                <i data-lucide="heart"></i> ${isFav ? "In My Favorites" : "Add to Favorites"}
              </button>
            </div>
            ${inCart ? `<p class="modal-fine">${inCart} in your cart</p>` : ""}
          </div>
        </div>
        ${related.length ? `
          <h4 class="modal-sub">More in ${esc(FILTERS[b.category].label)}</h4>
          <div class="modal-grid small">${related.map(bookCard).join("")}</div>` : ""}`
    };
  }

  // --- cart
  function cartView() {
    const t = cartTotals();

    if (!t.items.length) {
      return {
        title: "Your Cart",
        size: "medium",
        html: `<div class="empty-state">
          <i data-lucide="shopping-bag"></i>
          <p>Your cart is empty. Find your next read!</p>
          <button type="button" class="btn" data-action="close">Keep browsing</button>
        </div>`
      };
    }

    const lines = t.items.map(({ book, qty }) => `
      <div class="line-item">
        <img class="li-cover" ${imgAttrs(book)} alt="">
        <div class="li-info" data-book="${book.id}" role="button" tabindex="0">
          <b>${esc(book.title)}</b>
          <small>By ${esc(book.author)}</small>
          <span class="price">${priceHTML(book)}</span>
        </div>
        <div class="qty" aria-label="Quantity">
          <button type="button" data-qty="${book.id}" data-delta="-1" aria-label="Decrease quantity"><i data-lucide="minus"></i></button>
          <span>${qty}</span>
          <button type="button" data-qty="${book.id}" data-delta="1" aria-label="Increase quantity"><i data-lucide="plus"></i></button>
        </div>
        <b class="li-total">${money(effectivePrice(book) * qty)}</b>
        <button type="button" class="icon-btn" data-cart-remove="${book.id}" aria-label="Remove ${esc(book.title)}"><i data-lucide="trash-2"></i></button>
      </div>`).join("");

    const afterDiscount = t.subtotal - t.memberOff;
    const hint = t.delivery > 0
      ? `Add ${money(t.threshold - afterDiscount)} more for free delivery.`
      : "Free delivery applied.";

    return {
      title: `Your Cart (${t.count})`,
      size: "medium",
      html: `
        <div>${lines}</div>
        <div class="cart-summary">
          <div><span>Subtotal</span><span>${money(t.subtotal)}</span></div>
          ${t.pct ? `<div class="member-row"><span>Member discount (${t.pct}%)</span><span>−${money(t.memberOff)}</span></div>` : ""}
          <div><span>Delivery</span><span>${t.delivery ? money(t.delivery) : "Free"}</span></div>
          <div class="total"><span>Total</span><span>${money(t.total)}</span></div>
          <p class="modal-fine">${hint}</p>
          ${!isMember(currentUser()) && t.items.some(item => discountOf(item.book) > 0)
            ? `<p class="modal-fine member-hint">Checking out with a discounted book unlocks member savings: 10% off everything next time.</p>`
            : ""}
          <div class="cart-buttons">
            <button type="button" class="btn" data-action="checkout"><i data-lucide="lock"></i> Checkout</button>
            <button type="button" class="btn ghost" data-action="clear-cart">Clear cart</button>
          </div>
        </div>`
    };
  }

  function orderView(order) {
    return {
      title: "Order placed",
      size: "narrow",
      html: `
        <div class="success">
          <i data-lucide="circle-check"></i>
          <h3>Thank you, ${esc(order.name)}!</h3>
          <p>Order <b>${esc(order.number)}</b> with ${order.count} book${order.count === 1 ? "" : "s"}
             (<b>${money(order.total)}</b>) has been received for <b>${esc(order.email)}</b>.</p>
          ${order.newMember
            ? `<p class="member-note"><b>Member savings unlocked!</b> Enjoy 10% off everything on your next orders, plus free delivery over $25.</p>`
            : ""}
          <button type="button" class="btn" data-action="close">Continue shopping</button>
        </div>`
    };
  }

  // --- favorites
  function favoritesView() {
    const books = state.favs.map(id => BOOKS[id]);

    if (!books.length) {
      return {
        title: "My Favorites",
        size: "small",
        html: `<div class="empty-state">
          <i data-lucide="heart"></i>
          <p>You have no favorites yet. Open any book and choose “Add to Favorites”.</p>
          <button type="button" class="btn" data-action="close">Browse books</button>
        </div>`
      };
    }

    const lines = books.map(book => `
      <div class="line-item">
        <img class="li-cover" ${imgAttrs(book)} alt="">
        <div class="li-info" data-book="${book.id}" role="button" tabindex="0">
          <b>${esc(book.title)}</b>
          <small>By ${esc(book.author)}</small>
          <span class="price">${priceHTML(book)}</span>
        </div>
        <div class="li-actions">
          <button type="button" class="btn sm" data-add-cart="${book.id}"><i data-lucide="shopping-bag"></i> Add to Cart</button>
          <button type="button" class="icon-btn" data-fav-remove="${book.id}" aria-label="Remove ${esc(book.title)} from favorites"><i data-lucide="trash-2"></i></button>
        </div>
      </div>`).join("");

    return { title: `My Favorites (${books.length})`, size: "small", html: `<div>${lines}</div>` };
  }

  // --- book stores: the places in Cebu where our stores are available.
  // Open to everyone, no log in needed.
  const STORE_PLACES = [
    { place: "Ayala Center Cebu", area: "Cebu Business Park, Cebu City" },
    { place: "SM City Cebu", area: "North Reclamation Area, Cebu City" },
    { place: "SM Seaside City Cebu", area: "South Road Properties, Cebu City" },
    { place: "Cebu IT Park", area: "Lahug, Cebu City" },
    { place: "Colon Street", area: "Downtown, Cebu City" },
    { place: "Fuente Osmeña Circle", area: "Cebu City" },
    { place: "Talamban", area: "Cebu City" },
    { place: "Mandaue City Proper", area: "Mandaue City" },
    { place: "Lapu-Lapu City Proper", area: "Mactan Island, Lapu-Lapu City" },
    { place: "Talisay City Proper", area: "Talisay City" }
  ];

  function storesView() {
    return {
      title: "Our book stores are available at these places",
      titleClass: "soft",
      label: "Book store locations",
      size: "narrow",
      html: `<ul class="place-list">
        ${STORE_PLACES.map(st => `
          <li>
            <i data-lucide="map-pin"></i>
            <span><b>${esc(st.place)}</b><small>${esc(st.area)}</small></span>
          </li>`).join("")}
      </ul>`
    };
  }

  // --- discount promos (header: Membership and Weekly Offer)
  // Only discounted books are listed. Buying any discounted book unlocks membership:
  // 10% off everything in the cart + free delivery over $25.
  const isMember = user => Boolean(user && MEMBER_DISCOUNT[user.plan]);

  function promoView(kind) {
    const weekly = kind === "weekly";
    const books = BOOKS.filter(b => b.badge === (weekly ? "classic" : "latest"));
    const member = isMember(currentUser());

    const headline = weekly
      ? "20% off all Classics this week."
      : "Member deals: 15% off the newest releases.";

    const perk = member
      ? "Member savings unlocked: you save another 10% on everything in your cart, plus free delivery over $25."
      : "Buy any discounted book and unlock member savings: 10% off everything, plus free delivery over $25.";

    return resultsView("", books, {
      label: weekly ? "Discounted books this week" : "Member deals",
      intro: `<div class="promo-banner"><b>${headline}</b><span>${perk}</span></div>`
    });
  }

  // Ask a guest to log in / create an account first.
  // action: runs right after a successful log in or sign up.
  function requireLogin(note, action) {
    if (currentUser()) {
      action();
      return true;
    }

    pendingAuth = { action };
    pushView(() => authView("login", note));
    return false;
  }

  // After logging in or creating an account: the box closes, whatever the user was
  // trying to do (add to cart, save a favorite) is done, and a welcome popup appears.
  function finishAuth() {
    const pending = pendingAuth;
    pendingAuth = null;

    closeModal();

    if (pending) pending.action();

    pushView(welcomeView);
  }

  function welcomeView() {
    const user = currentUser();

    return {
      title: "",
      label: "Welcome",
      size: "compact",
      html: `
        <div class="auth-logo">
          <i data-lucide="book-open"></i>
          <span><b>Authore</b><small>BOOKS STORES</small></span>
        </div>
        <div class="success">
          <i data-lucide="circle-check"></i>
          <h3>Welcome, ${esc(user ? user.name : "reader")}!</h3>
          <p>You are a member of Authore. Please enjoy choosing books.</p>
          <button type="button" class="btn" data-action="close">Start browsing</button>
        </div>`
    };
  }

  // --- account: log in / create account / profile (compact box)
  // Small labels sit above each field; the boxes stay empty. A red message
  // appears under a box when it is empty or wrong.
  function authView(mode = "login", note = "") {
    const login = mode === "login";
    const err = '<span class="field-error" role="alert" hidden></span>';

    return {
      title: "",
      label: login ? "Log in" : "Create account",
      size: "compact",
      html: `
        <div class="auth-logo">
          <i data-lucide="book-open"></i>
          <span><b>Authore</b><small>BOOKS STORES</small></span>
        </div>
        <div class="auth-tabs">
          <button type="button" class="${login ? "active" : ""}" data-auth="login">Log in</button>
          <button type="button" class="${login ? "" : "active"}" data-auth="signup">Create account</button>
        </div>
        ${note ? `<p class="auth-note">${esc(note)}</p>` : ""}
        ${login ? `
          <form class="join-form compact" id="loginForm" novalidate>
            <label>Email<input type="email" name="email" autocomplete="email">${err}</label>
            <label>Password<input type="password" name="password" autocomplete="current-password">${err}</label>
            <button type="submit" class="btn"><i data-lucide="log-in"></i> Log in</button>
          </form>` : `
          <form class="join-form compact" id="signupForm" novalidate>
            <label>Full name<input type="text" name="name" autocomplete="name">${err}</label>
            <label>Email<input type="email" name="email" autocomplete="email">${err}</label>
            <div class="form-row">
              <label>Password<input type="password" name="password" autocomplete="new-password">${err}</label>
              <label>Confirm password<input type="password" name="confirm" autocomplete="new-password">${err}</label>
            </div>
            <button type="submit" class="btn"><i data-lucide="user-plus"></i> Create account</button>
          </form>`}`
    };
  }

  /* =====================================================
     POPUP CLICK HANDLING (event delegation)
     ===================================================== */

  const CLICKABLE =
    "[data-add-cart],[data-fav-toggle],[data-fav-remove],[data-qty],[data-cart-remove]," +
    "[data-auth],[data-book],[data-filter],[data-action]";

  modalBody.addEventListener("click", e => {
    const target = e.target.closest(CLICKABLE);
    if (!target) return;
    const d = target.dataset;

    if (d.addCart !== undefined) {
      const id = Number(d.addCart);
      if (currentUser()) {
        addToCart(id);
        rerender();
      } else {
        requireLogin("Please log in or create an account to add books to your cart.", () => addToCart(id));
      }
    } else if (d.favToggle !== undefined) {
      const id = Number(d.favToggle);
      if (currentUser()) {
        toggleFavorite(id);
        rerender();
      } else {
        requireLogin("Please log in or create an account to save your favorites.", () => toggleFavorite(id));
      }
    } else if (d.favRemove !== undefined) {
      toggleFavorite(Number(d.favRemove));
      rerender();
    } else if (d.qty !== undefined) {
      changeQty(Number(d.qty), Number(d.delta));
      rerender();
    } else if (d.cartRemove !== undefined) {
      removeFromCart(Number(d.cartRemove));
      rerender();
    } else if (d.auth) {
      const note = modalBody.querySelector(".auth-note");
      const text = note ? note.textContent : "";
      replaceView(() => authView(d.auth, text));
    } else if (d.book !== undefined) {
      const id = Number(d.book);
      pushView(() => detailView(id));
    } else if (d.filter) {
      const key = d.filter;
      pushView(() => listView(key));
    } else if (d.action) {
      switch (d.action) {
        case "close":
          closeModal();
          break;
        case "open-cart":
          pushView(cartView);
          break;
        case "open-favs":
          pushView(favoritesView);
          break;
        case "clear-cart":
          state.cart = {};
          persist();
          updateBadges();
          rerender();
          break;
        case "logout":
          signOut();
          closeModal();
          notify("You have been logged out.");
          break;
        case "checkout":
          checkout();
          break;
      }
    }
  });

  // make cards and rows usable with the keyboard
  modalBody.addEventListener("keydown", e => {
    if ((e.key === "Enter" || e.key === " ") && e.target.matches("[data-book]")) {
      e.preventDefault();
      e.target.click();
    }
  });

  function checkout() {
    const user = currentUser();
    if (!user) {
      requireLogin("Please log in or create an account to check out. Your cart will be kept.", () => {});
      return;
    }

    const t = cartTotals();
    if (!t.count) return;

    const order = {
      number: "#AUT-" + Math.floor(100000 + Math.random() * 900000),
      name: user.name,
      email: user.email,
      count: t.count,
      total: t.total,
      // buying at least one discounted book unlocks membership
      newMember: !isMember(user) && t.items.some(item => discountOf(item.book) > 0)
    };

    if (order.newMember) {
      user.plan = "member";
      store.save("authore.users", users);
    }

    state.cart = {};
    persist();
    updateBadges();

    const view = orderView(order);
    replaceView(() => view);
  }

  /* =====================================================
     FORMS (log in, sign up, membership)
     ===================================================== */

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // turn a field red and shake it
  function flagField(input) {
    input.classList.add("invalid");
    input.classList.remove("shake");
    void input.offsetWidth; // restart the animation
    input.classList.add("shake");
    input.addEventListener("animationend", () => input.classList.remove("shake"), { once: true });
  }

  // show a red message under one box (and shake it)
  function setFieldError(input, message) {
    const slot = input.closest("label") && input.closest("label").querySelector(".field-error");
    if (slot) {
      slot.textContent = message;
      slot.hidden = false;
    }
    flagField(input);
  }

  function clearFieldError(input) {
    input.classList.remove("invalid");
    const slot = input.closest("label") && input.closest("label").querySelector(".field-error");
    if (slot) {
      slot.textContent = "";
      slot.hidden = true;
    }
  }

  // problems = [{ input, msg }]
  function authFail(problems) {
    problems.forEach(problem => setFieldError(problem.input, problem.msg));
    problems[0].input.focus();
  }

  async function handleSignup(form) {
    refreshUsers();
    const { name, email, password, confirm } = form.elements;
    const nameValue = name.value.trim();
    const emailValue = email.value.trim().toLowerCase();
    const pw = password.value;
    const problems = [];

    if (nameValue.length < 2) {
      problems.push({ input: name, msg: nameValue ? "Please enter your full name (at least 2 letters)." : "Please enter your full name." });
    }
    if (!emailRe.test(emailValue)) {
      problems.push({ input: email, msg: emailValue ? "Please enter a valid email address." : "Please enter your email." });
    }
    if (!pw) {
      problems.push({ input: password, msg: "Please enter a password." });
    } else if (pw.length < 6) {
      problems.push({ input: password, msg: "Password must be at least 6 characters." });
    }
    if (!confirm.value) {
      problems.push({ input: confirm, msg: "Please confirm your password." });
    } else if (confirm.value !== pw) {
      problems.push({ input: confirm, msg: "Passwords do not match." });
    }
    if (!problems.length && users[emailValue]) {
      problems.push({ input: email, msg: "An account with this email already exists. Try logging in." });
    }
    if (problems.length) {
      authFail(problems);
      return;
    }

    const salt = newSalt();
    const hash = await hashPassword(pw, salt);

    refreshUsers(); // an account with this email may have been created while we were hashing
    if (users[emailValue]) {
      authFail([{ input: email, msg: "An account with this email already exists. Try logging in." }]);
      return;
    }

    users[emailValue] = { name: nameValue, email: emailValue, salt, hash, plan: null, created: Date.now() };
    const saved = store.save("authore.users", users);

    signIn(emailValue);
    finishAuth();

    if (!saved) {
      notify("Your browser blocks saving, so this account lasts only until you close the page.");
    }
  }

  async function handleLogin(form) {
    refreshUsers();
    const { email, password } = form.elements;
    const emailValue = email.value.trim().toLowerCase();
    const pw = password.value;
    const problems = [];

    if (!emailRe.test(emailValue)) {
      problems.push({ input: email, msg: emailValue ? "Please enter a valid email address." : "Please enter your email." });
    }
    if (!pw) {
      problems.push({ input: password, msg: "Please enter your password." });
    }
    if (problems.length) {
      authFail(problems);
      return;
    }

    const user = users[emailValue];
    if (!user) {
      authFail([{ input: email, msg: "No account found with that email. Create one instead?" }]);
      return;
    }

    if (!(await checkPassword(user, pw))) {
      authFail([{ input: password, msg: "Incorrect password. Please try again." }]);
      return;
    }

    signIn(emailValue);
    finishAuth();
  }

  modalBody.addEventListener("input", e => {
    const input = e.target;
    if (!(input instanceof HTMLInputElement) || !input.closest(".join-form")) return;

    clearFieldError(input);
  });

  modalBody.addEventListener("submit", e => {
    e.preventDefault();
    const form = e.target;

    if (form.matches("#signupForm")) handleSignup(form);
    else if (form.matches("#loginForm")) handleLogin(form);
  });

  /* =====================================================
     OPENERS: top bar, header, section headings, grids
     ===================================================== */

  // Membership and Weekly Offer show discounted books for logged-in users
  const openers = {
    membership: () => promoView("member"),
    offer: () => promoView("weekly"),
    latest: () => listView("latest")
  };

  document.querySelectorAll("[data-open]").forEach(button => {
    button.addEventListener("click", () => {
      const kind = button.dataset.open;

      if (kind !== "latest" && !currentUser()) {
        requireLogin("Please log in or create an account to see the discounted books.", () => {});
        return;
      }

      pushView(openers[kind]);
    });
  });

  // Logged out: the account link opens Log in / Create account.
  // Logged in: it opens a small menu whose only option is Log out.
  const accountLink = document.getElementById("accountLink");
  const accountMenu = document.getElementById("accountMenu");

  function hideAccountMenu() {
    accountMenu.hidden = true;
    accountLink.setAttribute("aria-expanded", "false");
  }

  accountLink.addEventListener("click", e => {
    e.preventDefault();

    if (!currentUser()) {
      pushView(() => authView("login"));
      return;
    }

    const opening = accountMenu.hidden;
    accountMenu.hidden = !opening;
    accountLink.setAttribute("aria-expanded", String(opening));
  });

  document.getElementById("logoutButton").addEventListener("click", () => {
    hideAccountMenu();
    signOut();
    notify("You have been logged out.");
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".account-menu-wrap")) hideAccountMenu();
  });

  document.getElementById("favoritesLink").addEventListener("click", e => {
    e.preventDefault();
    if (currentUser()) {
      pushView(favoritesView);
    } else {
      requireLogin("Please log in or create an account to see your favorites.", () => {});
    }
  });

  document.getElementById("cartButton").addEventListener("click", () => pushView(cartView));

  document.getElementById("storesButton").addEventListener("click", () => pushView(storesView));

  document.getElementById("categoriesViewAll")
    .addEventListener("click", () => pushView(categoriesView));

  document.getElementById("viewAll")
    .addEventListener("click", () => pushView(() => listView("all")));

  /* =====================================================
     EXPLORE CATEGORIES (18 cards)
     ===================================================== */

  const categoryGrid = document.getElementById("categoryGrid");
  categoryGrid.innerHTML = CATEGORY_KEYS.map(tile).join("");

  categoryGrid.addEventListener("click", e => {
    const card = e.target.closest("[data-filter]");
    if (!card) return;
    const key = card.dataset.filter;
    pushView(() => listView(key));
  });

  /* =====================================================
     HERO: STATIC BOOK SHELF (11 covers, like the design)
     The order matches the CSS positions: 2 + 2 small on the left,
     3 large in the centre, 2 + 2 small on the right.
     ===================================================== */

  const HERO_TITLES = [
    "The Alchemist", "Born a Crime",                  // far left
    "The Psychology of Money", "The Hobbit",          // inner left
    "The Seven Husbands of Evelyn Hugo",              // large left
    "Atomic Habits",                                  // large centre
    "Principles",                                     // large right
    "Sapiens", "Dune",                                // inner right
    "Zero to One", "The Midnight Library"             // far right
  ];

  const bookStage = document.getElementById("bookStage");

  bookStage.innerHTML = HERO_TITLES
    .map(title => BOOKS.find(b => b.title === title))
    .filter(Boolean)
    .map((book, index) => {
      const size = index >= 4 && index <= 6 ? "L" : "M"; // sharper covers for the large three
      return `<button type="button" class="float-book" data-book="${book.id}" aria-label="View ${esc(book.title)}">
        <img ${imgAttrs(book, size)} alt="" loading="eager" draggable="false">
      </button>`;
    })
    .join("");

  bookStage.addEventListener("click", e => {
    const item = e.target.closest("[data-book]");
    if (!item) return;
    const id = Number(item.dataset.book);
    pushView(() => detailView(id));
  });

  /* =====================================================
     DECIDING WHAT TO READ NEXT (all 50 books, 4 per page)
     ===================================================== */

  const PER_PAGE = 4;
  const bookGrid = document.getElementById("bookGrid");
  const pageCount = Math.ceil(FEATURED.length / PER_PAGE);
  let page = 0;

  function renderShelf() {
    const start = page * PER_PAGE;
    bookGrid.innerHTML = FEATURED.slice(start, start + PER_PAGE).map(bookCard).join("");
  }

  document.getElementById("previous").addEventListener("click", () => {
    page = (page - 1 + pageCount) % pageCount;
    renderShelf();
  });

  document.getElementById("next").addEventListener("click", () => {
    page = (page + 1) % pageCount;
    renderShelf();
  });

  bookGrid.addEventListener("click", e => {
    const card = e.target.closest("[data-book]");
    if (!card) return;
    const id = Number(card.dataset.book);
    pushView(() => detailView(id));
  });

  bookGrid.addEventListener("keydown", e => {
    if ((e.key === "Enter" || e.key === " ") && e.target.matches("[data-book]")) {
      e.preventDefault();
      e.target.click();
    }
  });

  renderShelf();

  /* =====================================================
     SEARCH WITH LIVE SUGGESTIONS
     ===================================================== */

  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const categorySelect = document.getElementById("categorySelect");
  const suggestionsEl = document.getElementById("suggestions");
  let activeIndex = -1;

  // lower-case and remove accents so "miserables" finds "Misérables"
  const normalize = text => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // only the book TITLE is searched: every typed letter/word must appear in it.
  // Titles that start with the typed text come first.
  function matchBooks(query, category) {
    const q = normalize(query.trim());
    const tokens = q.split(/\s+/).filter(Boolean);

    const rank = book => {
      const t = normalize(book.title);
      if (t.startsWith(q)) return 0;
      if (t.split(/[^a-z0-9]+/).some(word => word.startsWith(q))) return 1;
      return 2;
    };

    return BOOKS
      .filter(b => category === "all" || b.category === category)
      .filter(b => {
        const t = normalize(b.title);
        return tokens.every(token => t.includes(token));
      })
      .sort((x, y) => rank(x) - rank(y));
  }

  function hideSuggestions() {
    suggestionsEl.hidden = true;
    suggestionsEl.innerHTML = "";
    activeIndex = -1;
    searchInput.setAttribute("aria-expanded", "false");
  }

  function suggestionItem(book) {
    const title = esc(book.title);
    return `<li class="sg-item" role="option" data-book="${book.id}">
      <img ${imgAttrs(book, "S")} alt="">
      <span class="sg-text"><b>${title}</b><small>${esc(book.author)} · ${esc(FILTERS[book.category].label)}</small></span>
      <span class="pill ${book.badge}">${BADGES[book.badge]}</span>
    </li>`;
  }

  function updateSuggestions() {
    const q = searchInput.value.trim();
    if (!q) {
      hideSuggestions();
      return;
    }

    const results = matchBooks(q, categorySelect.value);

    if (!results.length) {
      suggestionsEl.innerHTML =
        `<li class="sg-empty">No books found for “${esc(q)}”. Try another title or author.</li>`;
    } else {
      suggestionsEl.innerHTML =
        results.slice(0, 6).map(suggestionItem).join("") +
        (results.length > 6
          ? `<li class="sg-all" role="option" data-all="1">See all ${results.length} results →</li>`
          : "");
    }

    activeIndex = -1;
    suggestionsEl.hidden = false;
    searchInput.setAttribute("aria-expanded", "true");
    watchCovers(suggestionsEl);
  }

  function showResults() {
    const q = searchInput.value.trim();
    const cat = categorySelect.value;
    const books = matchBooks(q, cat);

    const label = q ? `Results for ${q}` : cat !== "all" ? FILTERS[cat].label : "All books";

    hideSuggestions();
    pushView(() => resultsView("", books, { label }));
  }

  function activate(item) {
    if (item.dataset.all) {
      showResults();
    } else if (item.dataset.book !== undefined) {
      const id = Number(item.dataset.book);
      hideSuggestions();
      pushView(() => detailView(id));
    }
  }

  function setActive(index) {
    const items = [...suggestionsEl.querySelectorAll(".sg-item, .sg-all")];
    if (!items.length) return;
    activeIndex = (index + items.length) % items.length;
    items.forEach((item, i) => item.classList.toggle("active", i === activeIndex));
    items[activeIndex].scrollIntoView({ block: "nearest" });
  }

  searchInput.addEventListener("input", updateSuggestions);
  searchInput.addEventListener("focus", updateSuggestions);
  categorySelect.addEventListener("change", updateSuggestions);

  searchInput.addEventListener("keydown", e => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (suggestionsEl.hidden) updateSuggestions();
      setActive(activeIndex + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(activeIndex - 1);
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      const items = suggestionsEl.querySelectorAll(".sg-item, .sg-all");
      if (items[activeIndex]) activate(items[activeIndex]);
    }
  });

  // mousedown so the choice registers before the input loses focus
  suggestionsEl.addEventListener("mousedown", e => {
    const item = e.target.closest(".sg-item, .sg-all");
    if (!item) return;
    e.preventDefault();
    activate(item);
  });

  searchForm.addEventListener("submit", e => {
    e.preventDefault();
    showResults();
  });

  document.addEventListener("click", e => {
    if (!searchForm.contains(e.target)) hideSuggestions();
  });

  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    hideAccountMenu();
    if (!modalEl.hidden) closeModal();
    else hideSuggestions();
  });

  /* =====================================================
     MOBILE MENU
     ===================================================== */

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  menuButton?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.innerHTML = open
      ? '<i data-lucide="x"></i>'
      : '<i data-lucide="menu"></i>';

    refreshIcons();
  });

  nav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");

      if (menuButton) {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.innerHTML = '<i data-lucide="menu"></i>';
        refreshIcons();
      }
    });
  });

  /* =====================================================
     NOTIFICATION MESSAGE
     ===================================================== */

  const toast = document.getElementById("toast");
  let toastTimer;

  function notify(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
  }

  /* =====================================================
     EDITORIAL REVIEWS (9 cards, scroll sideways)
     ===================================================== */

  const reviewGrid = document.getElementById("reviewGrid");
  const reviewCards = [...reviewGrid.querySelectorAll(".review-card")];
  const reviewDots = document.getElementById("reviewDots");
  let reviewPerView = 3;
  let reviewPages = 3;

  function reviewStep() {
    return reviewCards.length > 1
      ? reviewCards[1].offsetLeft - reviewCards[0].offsetLeft
      : reviewGrid.clientWidth;
  }

  function currentReviewPage() {
    const atEnd = reviewGrid.scrollLeft + reviewGrid.clientWidth >= reviewGrid.scrollWidth - 4;
    if (atEnd) return reviewPages - 1;
    const index = Math.round(reviewGrid.scrollLeft / reviewStep());
    return Math.min(Math.floor(index / reviewPerView), reviewPages - 1);
  }

  function markReviewDot() {
    const active = currentReviewPage();
    [...reviewDots.children].forEach((dot, i) => dot.classList.toggle("active", i === active));
  }

  function buildReviewDots() {
    reviewPerView = Math.max(1, Math.round(reviewGrid.clientWidth / reviewStep()));
    reviewPages = Math.ceil(reviewCards.length / reviewPerView);

    reviewDots.innerHTML = Array.from({ length: reviewPages }, (_, i) =>
      `<span data-page="${i}" role="button" aria-label="Reviews page ${i + 1}"></span>`).join("");

    markReviewDot();
  }

  function goToReviewPage(pageIndex) {
    const clamped = Math.max(0, Math.min(pageIndex, reviewPages - 1));
    reviewGrid.scrollTo({ left: clamped * reviewPerView * reviewStep(), behavior: "smooth" });
  }

  reviewGrid.addEventListener("scroll", markReviewDot, { passive: true });

  reviewDots.addEventListener("click", e => {
    const dot = e.target.closest("[data-page]");
    if (dot) goToReviewPage(Number(dot.dataset.page));
  });

  document.getElementById("reviewPrev")
    .addEventListener("click", () => goToReviewPage(currentReviewPage() - 1));
  document.getElementById("reviewNext")
    .addEventListener("click", () => goToReviewPage(currentReviewPage() + 1));

  window.addEventListener("resize", buildReviewDots);
  buildReviewDots();

  /* =====================================================
     START
     ===================================================== */

  updateBadges();
  refreshIcons();

  
  document.querySelectorAll("img[data-title]").forEach(img => {
    if (img.complete && img.naturalWidth <= 10) applyFallback(img);
  });
});