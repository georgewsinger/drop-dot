goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__135727__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__135727 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__135728__i = 0, G__135728__a = new Array(arguments.length -  0);
while (G__135728__i < G__135728__a.length) {G__135728__a[G__135728__i] = arguments[G__135728__i + 0]; ++G__135728__i;}
  args = new cljs.core.IndexedSeq(G__135728__a,0);
} 
return G__135727__delegate.call(this,args);};
G__135727.cljs$lang$maxFixedArity = 0;
G__135727.cljs$lang$applyTo = (function (arglist__135729){
var args = cljs.core.seq(arglist__135729);
return G__135727__delegate(args);
});
G__135727.cljs$core$IFn$_invoke$arity$variadic = G__135727__delegate;
return G__135727;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__135730__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__135730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__135731__i = 0, G__135731__a = new Array(arguments.length -  0);
while (G__135731__i < G__135731__a.length) {G__135731__a[G__135731__i] = arguments[G__135731__i + 0]; ++G__135731__i;}
  args = new cljs.core.IndexedSeq(G__135731__a,0);
} 
return G__135730__delegate.call(this,args);};
G__135730.cljs$lang$maxFixedArity = 0;
G__135730.cljs$lang$applyTo = (function (arglist__135732){
var args = cljs.core.seq(arglist__135732);
return G__135730__delegate(args);
});
G__135730.cljs$core$IFn$_invoke$arity$variadic = G__135730__delegate;
return G__135730;
})()
;

return null;
});
