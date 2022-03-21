export const inputdata = {
  owner : { label : 'Owner', hash :'owner', desc : 'Address of the Tezos account that owns the EVSE(s).' },
  id :    { label : 'Identifier', hash : 'identifier', desc : 'Identifier of the EVSE(s).' },
  nb :    { label : 'Number of EVSE(s)', hash : 'number-of-evses', desc : 'Number of EVSEs to declare.' },
  evseserver : { label : 'EVSE Server', hash : 'evse-manager-server', desc : 'EVSE Manager Server.',
    items : [ { value : 'werenode', label : 'Werenode Server' } ]
  },
  supervision : { label : 'Type', hash : 'type', desc : 'Type of supervision',
    items : [
      { value : 'wherenodeocpp16', label : 'Werenode - OCPP 1.6' },
      { value : 'wherenodeocpp20', label : 'Werenode - OCPP 2.0' },
      { value : 'werenoderpcget', label : 'Werenode - RPC GET' },
  ]},
  switchon : { label : 'Url to switch on', hash : 'switch-on-url', desc : 'Url to switch EVSE on' },
  switchoff : { label : 'Url to switch off', hash : 'switch-off-url', desc : 'Url to switch EVSE off' },
  connectormode : { label : 'Mode', hash : 'connector-mode', desc : 'Mode for connector',
    items : [
      { value : 'ac1', label : 'Alternating - Monophased' },
      { value : 'ac3', label : 'Alternating - Triphased' },
      { value : 'dc400', label : 'Direct Courant - 400V' },
      { value : 'dc800', label : 'Direct Courant - 800V' },
      { value : 'ind', label : 'Inductive' },
    ]
  },
  power : { label : 'Power', hash : 'connector-power', desc : 'Connector power',
    items : [
      { value : 2, label : '2kw' },
      { value : 3, label : '3kw' },
      { value : 7, label : '7kw' },
      { value : 11, label : '11kw' },
      { value : 22, label : '22kw' },
      { value : 43, label : '43kw' },
      { value : 50, label : '50kw' },
    ]
  },
  connectortype : { label : 'Type', hash : 'connector-type', desc : 'Connecter type',
    items : [
      { value : 0, label : 'Female domestic A' },
      { value : 1, label : 'Female domestic B' },
      { value : 2, label : 'Female domestic C' },
      { value : 3, label : 'Female domestic D' },
      { value : 4, label : 'Female domestic EF Schuko' },
      { value : 5, label : 'Female domestic G' },
      { value : 6, label : 'Female domestic H' },
      { value : 7, label : 'Female domestic I' },
      { value : 8, label : 'Female domestic J' },
      { value : 9, label : 'Female domestic K' },
      { value : 10, label : 'Female domestic L' },
      { value : 11, label : 'Female domestic M' },
      { value : 12, label : 'Female domestic N' },
      { value : 13, label : 'Female domestic O' },
      { value : 14, label : 'Female IEC 60309 one-phase blue 16A'  },
      { value : 15, label : 'Female IEC 60309 three-phase red 16A' },
      { value : 16, label : 'Female IEC 60309 three-phase red 32A' },
      { value : 17, label : 'Female IEC 60309 three-phase red 63A' },
      { value : 18, label : 'Male type 1 with cable' },
      { value : 19, label : 'Female type 2' },
      { value : 20, label : 'Male type 2 with cable' },
      { value : 21, label : 'Male Tesla with cable' },
      { value : 22, label : 'Female type 3' },
      { value : 23, label : 'Combo type 1 with cable' },
      { value : 24, label : 'Combo type 2 with cable' },
      { value : 25, label : 'Male Tesla DC with cable' },
      { value : 26, label : 'Chademo with cable' },
    ]
  },
  price : { label : 'Price per minute', hash : 'price-per-minute', desc : 'Price per minute' },
  currency : { label : 'Currency', hash : 'currency', desc : 'Currency',
    items : [
      { value : 'euro',     label : 'EUR' },
    ]
  },
  index : { label : 'Index', hash : 'index', desc : 'Connector index' },
  freeusers : { label : 'Free users', hash : 'free-users', desc : 'Free users' },
  freeuser : { label : 'Free user account', hash : 'free-users', desc : 'Free user account address' },
  gps : { label : 'GPS', hash : 'gps-coordinate', desc : 'GPS coordinate' }
}

export const isOCPP = (t) => {
  return (t === 'wherenodeocpp16' || t === 'wherenodeocpp20')
}

export const toObj = v => {
  let obj = {};
  for (let i = 0; i < inputdata[v].items.length; i++) {
    obj[inputdata[v].items[i].value] = inputdata[v].items[i].label;
  }
  return obj;
}
