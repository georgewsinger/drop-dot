goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__81280__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__81280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81281__i = 0, G__81281__a = new Array(arguments.length -  0);
while (G__81281__i < G__81281__a.length) {G__81281__a[G__81281__i] = arguments[G__81281__i + 0]; ++G__81281__i;}
  args = new cljs.core.IndexedSeq(G__81281__a,0);
} 
return G__81280__delegate.call(this,args);};
G__81280.cljs$lang$maxFixedArity = 0;
G__81280.cljs$lang$applyTo = (function (arglist__81282){
var args = cljs.core.seq(arglist__81282);
return G__81280__delegate(args);
});
G__81280.cljs$core$IFn$_invoke$arity$variadic = G__81280__delegate;
return G__81280;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__81283__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__81283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81284__i = 0, G__81284__a = new Array(arguments.length -  0);
while (G__81284__i < G__81284__a.length) {G__81284__a[G__81284__i] = arguments[G__81284__i + 0]; ++G__81284__i;}
  args = new cljs.core.IndexedSeq(G__81284__a,0);
} 
return G__81283__delegate.call(this,args);};
G__81283.cljs$lang$maxFixedArity = 0;
G__81283.cljs$lang$applyTo = (function (arglist__81285){
var args = cljs.core.seq(arglist__81285);
return G__81283__delegate(args);
});
G__81283.cljs$core$IFn$_invoke$arity$variadic = G__81283__delegate;
return G__81283;
})()
;

return null;
});
