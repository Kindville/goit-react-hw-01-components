import PropTypes from 'prop-types'
import {StatSection, Title, StatList, StatItem, Label} from 'statistics/Statistics.styled'

export const Statistics = ({title, stats}) => {
    return (
   <StatSection >
     {title && <Title>{title}</Title>}

     <StatList>            
          {stats.map(({ id, label, percentage }) => {
      return (
    <StatItem>
      <Label className="label">{label}</Label>
      <Label className="percentage">{percentage}</Label>
          </StatItem>)
    }) }      
  </StatList>
    </StatSection>
    )
}
Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string ,
            percentage: PropTypes.number,
        })
    ).isRequired
}
