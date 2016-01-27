goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47507__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47507 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47508__i = 0, G__47508__a = new Array(arguments.length -  0);
while (G__47508__i < G__47508__a.length) {G__47508__a[G__47508__i] = arguments[G__47508__i + 0]; ++G__47508__i;}
  args = new cljs.core.IndexedSeq(G__47508__a,0);
} 
return G__47507__delegate.call(this,args);};
G__47507.cljs$lang$maxFixedArity = 0;
G__47507.cljs$lang$applyTo = (function (arglist__47509){
var args = cljs.core.seq(arglist__47509);
return G__47507__delegate(args);
});
G__47507.cljs$core$IFn$_invoke$arity$variadic = G__47507__delegate;
return G__47507;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47510__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47510 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47511__i = 0, G__47511__a = new Array(arguments.length -  0);
while (G__47511__i < G__47511__a.length) {G__47511__a[G__47511__i] = arguments[G__47511__i + 0]; ++G__47511__i;}
  args = new cljs.core.IndexedSeq(G__47511__a,0);
} 
return G__47510__delegate.call(this,args);};
G__47510.cljs$lang$maxFixedArity = 0;
G__47510.cljs$lang$applyTo = (function (arglist__47512){
var args = cljs.core.seq(arglist__47512);
return G__47510__delegate(args);
});
G__47510.cljs$core$IFn$_invoke$arity$variadic = G__47510__delegate;
return G__47510;
})()
;

return null;
});
