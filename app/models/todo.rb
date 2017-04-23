class Todo < ApplicationRecord
  validates_presence_of :title
  validates_presence_of :created_by
end
