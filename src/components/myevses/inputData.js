export const inputData = {
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
      { value : 'werenoderpcget', label : 'Werenode - RPC GET ...' },
  ]},
  switchon : { label : 'Url to switch on', hash : 'switch-on-url', desc : 'Url to switch EVSE on' },
  switchoff : { label : 'Url to switch off', hash : 'switch-off-url', desc : 'Url to switch EVSE off' },
  connectormode : { label : 'Mode', hash : 'connector-mode', desc : 'Mode for connector',
    items : [
      { value : 'ac1', label : 'Alternative - Monophased' },
      { value : 'ac3', label : 'Alternative - Triphased' },
      { value : 'dc400', label : 'Direct Courant - 400V' },
      { value : 'dc800', label : 'Direct Courant - 800V' },
      { value : 'ind', label : 'Inductive' },
    ]
  },
  power : { label : 'Power', hash : 'connector-power', desc : 'Connector power',
    items : [
      { value : 'p2', label : '2kw' },
      { value : 'p3', label : '3kw' },
      { value : 'p7', label : '7kw' },
      { value : 'p11', label : '11kw' },
      { value : 'p22', label : '22kw' },
      { value : 'p43', label : '43kw' },
      { value : 'p50', label : '50kw' },
    ]
  },
  connectortype : { label : 'Type', hash : 'connector-type', desc : 'Connecter type',
    items : [
      { value : 'ctype0', label : 'Female domestic A' },
      { value : 'ctype1', label : 'Female domestic B' },
      { value : 'ctype2', label : 'Female domestic C' },
      { value : 'ctype3', label : 'Female domestic D' },
      { value : 'ctype4', label : 'Female domestic EF Schuko' },
      { value : 'ctype5', label : 'Female domestic G' },
      { value : 'ctype6', label : 'Female domestic H' },
      { value : 'ctype7', label : 'Female domestic I' },
      { value : 'ctype8', label : 'Female domestic J' },
      { value : 'ctype9', label : 'Female domestic K' },
      { value : 'ctype10', label : 'Female domestic L' },
      { value : 'ctype11', label : 'Female domestic M' },
      { value : 'ctype12', label : 'Female domestic N' },
      { value : 'ctype13', label : 'Female domestic O' },
      { value : 'ctype14', label : 'Female IEC 60309 one-phase blue 16A'  },
      { value : 'ctype15', label : 'Female IEC 60309 three-phase red 16A' },
      { value : 'ctype16', label : 'Female IEC 60309 three-phase red 32A' },
      { value : 'ctype17', label : 'Female IEC 60309 three-phase red 63A' },
      { value : 'ctype18', label : 'Male type 1 with cable' },
      { value : 'ctype19', label : 'Female type 2' },
      { value : 'ctype20', label : 'Male type 2 with cable' },
      { value : 'ctype21', label : 'Male Tesla with cable' },
      { value : 'ctype22', label : 'Female type 3' },
      { value : 'ctype23', label : 'Combo type 1 with cable' },
      { value : 'ctype24', label : 'Combo type 2 with cable' },
      { value : 'ctype25', label : 'Male Tesla DC with cable' },
      { value : 'ctype26', label : 'Chademo with cable' },
    ]
  },
  price : { label : 'Price per minute', hash : 'price-per-minute', desc : 'Price per minute' },
  currency : { label : 'Currency', hash : 'currency', desc : 'Currency',
    items : [
      { value : 'euro',     label : 'EUR' },
      { value : 'tez',      label : 'XTZ' },
      { value : 'werecoin', label : 'WRC' }
    ]
  },
  index : { label : 'Index', hash : 'index', desc : 'Connector index' }
}

export const isOCPP = (t) => {
  return (t == 'wherenodeocpp16' || t == 'wherenodeocpp20')
}
