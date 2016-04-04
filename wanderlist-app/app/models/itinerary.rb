class Itinerary < ActiveRecord::Base
	belongs_to :user
	belongs_to :destination
	has_many :activities

	def as_json(options = {})
    super(options.merge(include: :activities))
  end
end
