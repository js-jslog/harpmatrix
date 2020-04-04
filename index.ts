const getLayouts = () => ['major-diatonic'];
const getHarpMatrix = () => {
  const matrix: [
    'b3', undefined, undefined, 'b3',
    '1', '3', '5', '1',
    '2', '5', '7', '2',
    'b2', 'b5', 'b7', 'b2',
    undefined, '4', '6', undefined,
    undefined, undefined, 'b6', undefined,
  ] = [
    'b3',     ,     , 'b3',
    '1' , '3' , '5' , '1' ,
    '2' , '5' , '7' , '2' ,
    'b2', 'b5', 'b7', 'b2',
        , '4' , '6' ,     ,
        ,     , 'b6',     ,
  ];

  return matrix;
};

export { getLayouts, getHarpMatrix };

