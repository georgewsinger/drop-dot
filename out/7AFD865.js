goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__267090__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__267090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__267091__i = 0, G__267091__a = new Array(arguments.length -  0);
while (G__267091__i < G__267091__a.length) {G__267091__a[G__267091__i] = arguments[G__267091__i + 0]; ++G__267091__i;}
  args = new cljs.core.IndexedSeq(G__267091__a,0);
} 
return G__267090__delegate.call(this,args);};
G__267090.cljs$lang$maxFixedArity = 0;
G__267090.cljs$lang$applyTo = (function (arglist__267092){
var args = cljs.core.seq(arglist__267092);
return G__267090__delegate(args);
});
G__267090.cljs$core$IFn$_invoke$arity$variadic = G__267090__delegate;
return G__267090;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__267093__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__267093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__267094__i = 0, G__267094__a = new Array(arguments.length -  0);
while (G__267094__i < G__267094__a.length) {G__267094__a[G__267094__i] = arguments[G__267094__i + 0]; ++G__267094__i;}
  args = new cljs.core.IndexedSeq(G__267094__a,0);
} 
return G__267093__delegate.call(this,args);};
G__267093.cljs$lang$maxFixedArity = 0;
G__267093.cljs$lang$applyTo = (function (arglist__267095){
var args = cljs.core.seq(arglist__267095);
return G__267093__delegate(args);
});
G__267093.cljs$core$IFn$_invoke$arity$variadic = G__267093__delegate;
return G__267093;
})()
;

return null;
});
