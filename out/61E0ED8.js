goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__295970__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__295970 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__295971__i = 0, G__295971__a = new Array(arguments.length -  0);
while (G__295971__i < G__295971__a.length) {G__295971__a[G__295971__i] = arguments[G__295971__i + 0]; ++G__295971__i;}
  args = new cljs.core.IndexedSeq(G__295971__a,0);
} 
return G__295970__delegate.call(this,args);};
G__295970.cljs$lang$maxFixedArity = 0;
G__295970.cljs$lang$applyTo = (function (arglist__295972){
var args = cljs.core.seq(arglist__295972);
return G__295970__delegate(args);
});
G__295970.cljs$core$IFn$_invoke$arity$variadic = G__295970__delegate;
return G__295970;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__295973__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__295973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__295974__i = 0, G__295974__a = new Array(arguments.length -  0);
while (G__295974__i < G__295974__a.length) {G__295974__a[G__295974__i] = arguments[G__295974__i + 0]; ++G__295974__i;}
  args = new cljs.core.IndexedSeq(G__295974__a,0);
} 
return G__295973__delegate.call(this,args);};
G__295973.cljs$lang$maxFixedArity = 0;
G__295973.cljs$lang$applyTo = (function (arglist__295975){
var args = cljs.core.seq(arglist__295975);
return G__295973__delegate(args);
});
G__295973.cljs$core$IFn$_invoke$arity$variadic = G__295973__delegate;
return G__295973;
})()
;

return null;
});
