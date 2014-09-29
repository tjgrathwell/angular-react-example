class Book
  @@books = []
  @@id = 1

  def self.all(count)
    while @@books.length < count
      @@books << {
        id: @@id,
        title: Faker::Company.catch_phrase,
        author: Faker::Name.name,
        summary: Faker::Lorem.paragraph,
        review: Faker::Lorem.paragraph
      }

      @@id += 1
    end

    @@books[0..count-1]
  end
end
