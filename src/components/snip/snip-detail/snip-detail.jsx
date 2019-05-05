import classNames from 'classnames'
import React from 'react'

const SnipsDetail = ({ currentSnip: { comment, snip }, saveSnipEdit }) => {
  const handleSnipChange = ev => {
    const newSnip = { snip: ev.target.value, comment }
    saveSnipEdit(newSnip)
  }

  const handleCommentChange = ev => {
    const newSnip = { snip, comment: ev.target.value }
    saveSnipEdit(newSnip)
  }

  const SnipClass = classNames('snip-detail-text-area', 'snip-detail-snip')

  const CommentClass = classNames(
    'snip-detail-text-area',
    'snip-detail-comment'
  )

  return (
    <div className="snip-detail">
      <textarea
        className={SnipClass}
        onChange={handleSnipChange}
        value={snip}
      />
      <textarea
        className={CommentClass}
        onChange={handleCommentChange}
        value={comment}
      />
    </div>
  )
}

export default SnipsDetail
