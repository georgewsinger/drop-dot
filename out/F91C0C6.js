goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__274613__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__274613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__274614__i = 0, G__274614__a = new Array(arguments.length -  0);
while (G__274614__i < G__274614__a.length) {G__274614__a[G__274614__i] = arguments[G__274614__i + 0]; ++G__274614__i;}
  args = new cljs.core.IndexedSeq(G__274614__a,0);
} 
return G__274613__delegate.call(this,args);};
G__274613.cljs$lang$maxFixedArity = 0;
G__274613.cljs$lang$applyTo = (function (arglist__274615){
var args = cljs.core.seq(arglist__274615);
return G__274613__delegate(args);
});
G__274613.cljs$core$IFn$_invoke$arity$variadic = G__274613__delegate;
return G__274613;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__274616__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__274616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__274617__i = 0, G__274617__a = new Array(arguments.length -  0);
while (G__274617__i < G__274617__a.length) {G__274617__a[G__274617__i] = arguments[G__274617__i + 0]; ++G__274617__i;}
  args = new cljs.core.IndexedSeq(G__274617__a,0);
} 
return G__274616__delegate.call(this,args);};
G__274616.cljs$lang$maxFixedArity = 0;
G__274616.cljs$lang$applyTo = (function (arglist__274618){
var args = cljs.core.seq(arglist__274618);
return G__274616__delegate(args);
});
G__274616.cljs$core$IFn$_invoke$arity$variadic = G__274616__delegate;
return G__274616;
})()
;

return null;
});
