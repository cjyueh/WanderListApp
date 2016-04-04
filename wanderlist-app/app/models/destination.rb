class Destination < ActiveRecord::Base
	has_many :itineraries

	# def as_json(options = {})
 #    super(options.merge(include: :itineraries))
 #  end
end
