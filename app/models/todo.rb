# == Schema Information
#
# Table name: todos
#
#  id          :integer          not null, primary key
#  title       :string(255)
#  description :text(65535)
#  created_by  :string(255)
#  done        :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Todo < ApplicationRecord
  has_many :items, dependent: :destroy
  validates_presence_of :title, :created_by
end
