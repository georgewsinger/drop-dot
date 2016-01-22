goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26493__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26494__i = 0, G__26494__a = new Array(arguments.length -  0);
while (G__26494__i < G__26494__a.length) {G__26494__a[G__26494__i] = arguments[G__26494__i + 0]; ++G__26494__i;}
  args = new cljs.core.IndexedSeq(G__26494__a,0);
} 
return G__26493__delegate.call(this,args);};
G__26493.cljs$lang$maxFixedArity = 0;
G__26493.cljs$lang$applyTo = (function (arglist__26495){
var args = cljs.core.seq(arglist__26495);
return G__26493__delegate(args);
});
G__26493.cljs$core$IFn$_invoke$arity$variadic = G__26493__delegate;
return G__26493;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26496__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26496 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26497__i = 0, G__26497__a = new Array(arguments.length -  0);
while (G__26497__i < G__26497__a.length) {G__26497__a[G__26497__i] = arguments[G__26497__i + 0]; ++G__26497__i;}
  args = new cljs.core.IndexedSeq(G__26497__a,0);
} 
return G__26496__delegate.call(this,args);};
G__26496.cljs$lang$maxFixedArity = 0;
G__26496.cljs$lang$applyTo = (function (arglist__26498){
var args = cljs.core.seq(arglist__26498);
return G__26496__delegate(args);
});
G__26496.cljs$core$IFn$_invoke$arity$variadic = G__26496__delegate;
return G__26496;
})()
;

return null;
});
