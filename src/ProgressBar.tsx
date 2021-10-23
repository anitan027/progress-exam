import React from 'react'

interface Props {
	topImg: string;
	barImg: string;
	minValue?: number;
	MaxValue?: number;
	stopValue?: number | string;
	processingTime?: number | string;
	repeatable?: boolean;
	repeatTimes?: number;
}

export const ProgressBar: React.FC<Props> = ({ 
	topImg, 
	barImg, 
	minValue, 
	MaxValue, 
	stopValue, 
	processingTime, 
	repeatable, 
	repeatTimes
	}) => {

	const containerStyles = {
    height: 20,
    width: '80%',
    backgroundColor: barImg,
    borderRadius: 50,
    margin: 50
  }
	
  const fillerStyles = {
    height: '100%',
    width: `${stopValue}%`,
    backgroundColor: topImg,
    borderRadius: 'inherit',
    textAlign: 'right' as const,
		transition: `width ${processingTime}s ease-in-out`
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold' as const
  }

	return (
		<>
			<div style={containerStyles}>
				<div style={fillerStyles}>
					<span style={labelStyles}>{`${stopValue}%`}</span>
				</div>
			</div>
		</>
	)
}
