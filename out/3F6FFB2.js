goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__277951__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__277951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__277952__i = 0, G__277952__a = new Array(arguments.length -  0);
while (G__277952__i < G__277952__a.length) {G__277952__a[G__277952__i] = arguments[G__277952__i + 0]; ++G__277952__i;}
  args = new cljs.core.IndexedSeq(G__277952__a,0);
} 
return G__277951__delegate.call(this,args);};
G__277951.cljs$lang$maxFixedArity = 0;
G__277951.cljs$lang$applyTo = (function (arglist__277953){
var args = cljs.core.seq(arglist__277953);
return G__277951__delegate(args);
});
G__277951.cljs$core$IFn$_invoke$arity$variadic = G__277951__delegate;
return G__277951;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__277954__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__277954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__277955__i = 0, G__277955__a = new Array(arguments.length -  0);
while (G__277955__i < G__277955__a.length) {G__277955__a[G__277955__i] = arguments[G__277955__i + 0]; ++G__277955__i;}
  args = new cljs.core.IndexedSeq(G__277955__a,0);
} 
return G__277954__delegate.call(this,args);};
G__277954.cljs$lang$maxFixedArity = 0;
G__277954.cljs$lang$applyTo = (function (arglist__277956){
var args = cljs.core.seq(arglist__277956);
return G__277954__delegate(args);
});
G__277954.cljs$core$IFn$_invoke$arity$variadic = G__277954__delegate;
return G__277954;
})()
;

return null;
});
