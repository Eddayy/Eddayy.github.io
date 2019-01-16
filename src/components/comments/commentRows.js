import React from 'react'
import moment from 'moment'

const CommentRows = ({ comments }) => {
  return comments.length > 0 ? (
    comments
      .slice()
      .reverse()
      .map(comment => {
        const { Name } = comment
        const { Posted } = comment
        const { PictureUrl } = comment
        const { Text } = comment
        return (
          <div key={Posted} className="columns is-12 is-mobile is-gapless">
            <div className="column has-text-centered is-1-tablet is-2-mobile is-horizontal-center">
              <figure className="image is-32x32">
                <img
                  className="is-rounded"
                  src={PictureUrl}
                  alt="Profile Pic"
                />
              </figure>
            </div>
            <div className="column">
              <div className="">
                <div className="has-text-left">
                  {Name}
                  {'  '}
                  <span className="subtitle has-text-grey is-size-6">
                    posted{' '}
                    {moment
                      .unix(Math.round(Posted / 1000), 'YYYYMMDDHHMMSS')
                      .fromNow()}
                  </span>
                </div>
              </div>
              <div className="has-text-left">{Text}</div>
            </div>
          </div>
        )
      })
  ) : (
    <div className="has-text-grey">No comments found. Be the first!</div>
  )
}

export default CommentRows
