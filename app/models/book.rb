class Book
  @@books = []

  def self.all(count)
    while @@books.length < count
      @@books << {
        title: Faker::Company.catch_phrase,
        author: Faker::Name.name,
        summary: Faker::Lorem.paragraph,
        review: Faker::Lorem.paragraph
      }
    end

    @@books[0..count-1]
  end
end
