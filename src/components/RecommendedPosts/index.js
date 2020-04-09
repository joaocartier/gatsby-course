import React from "react"
import propTypes from "prop-types"
import * as S from "./styled"

export default function RecommendedPosts({ next, previous }) {
  return (
    <S.RecommendedWrapper>
      {previous && (
        <S.RecommendedLink
          cover
          direction="left"
          bg="#16202c"
          duration={0.6}
          to="/"
          title="Voltar para Home"
          to={previous.fields.slug}
          className="previous"
        >
          {previous.frontmatter.title}
        </S.RecommendedLink>
      )}
      {next && (
        <S.RecommendedLink
          cover
          direction="right"
          bg="#16202c"
          duration={0.6}
          to={next.fields.slug}
          className="next"
        >
          {next.frontmatter.title}
        </S.RecommendedLink>
      )}
    </S.RecommendedWrapper>
  )
}

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}
