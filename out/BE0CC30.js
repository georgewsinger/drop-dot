goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__250610__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__250610 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__250611__i = 0, G__250611__a = new Array(arguments.length -  0);
while (G__250611__i < G__250611__a.length) {G__250611__a[G__250611__i] = arguments[G__250611__i + 0]; ++G__250611__i;}
  args = new cljs.core.IndexedSeq(G__250611__a,0);
} 
return G__250610__delegate.call(this,args);};
G__250610.cljs$lang$maxFixedArity = 0;
G__250610.cljs$lang$applyTo = (function (arglist__250612){
var args = cljs.core.seq(arglist__250612);
return G__250610__delegate(args);
});
G__250610.cljs$core$IFn$_invoke$arity$variadic = G__250610__delegate;
return G__250610;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__250613__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__250613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__250614__i = 0, G__250614__a = new Array(arguments.length -  0);
while (G__250614__i < G__250614__a.length) {G__250614__a[G__250614__i] = arguments[G__250614__i + 0]; ++G__250614__i;}
  args = new cljs.core.IndexedSeq(G__250614__a,0);
} 
return G__250613__delegate.call(this,args);};
G__250613.cljs$lang$maxFixedArity = 0;
G__250613.cljs$lang$applyTo = (function (arglist__250615){
var args = cljs.core.seq(arglist__250615);
return G__250613__delegate(args);
});
G__250613.cljs$core$IFn$_invoke$arity$variadic = G__250613__delegate;
return G__250613;
})()
;

return null;
});
