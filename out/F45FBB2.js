goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15923__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15924__i = 0, G__15924__a = new Array(arguments.length -  0);
while (G__15924__i < G__15924__a.length) {G__15924__a[G__15924__i] = arguments[G__15924__i + 0]; ++G__15924__i;}
  args = new cljs.core.IndexedSeq(G__15924__a,0);
} 
return G__15923__delegate.call(this,args);};
G__15923.cljs$lang$maxFixedArity = 0;
G__15923.cljs$lang$applyTo = (function (arglist__15925){
var args = cljs.core.seq(arglist__15925);
return G__15923__delegate(args);
});
G__15923.cljs$core$IFn$_invoke$arity$variadic = G__15923__delegate;
return G__15923;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15926__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15927__i = 0, G__15927__a = new Array(arguments.length -  0);
while (G__15927__i < G__15927__a.length) {G__15927__a[G__15927__i] = arguments[G__15927__i + 0]; ++G__15927__i;}
  args = new cljs.core.IndexedSeq(G__15927__a,0);
} 
return G__15926__delegate.call(this,args);};
G__15926.cljs$lang$maxFixedArity = 0;
G__15926.cljs$lang$applyTo = (function (arglist__15928){
var args = cljs.core.seq(arglist__15928);
return G__15926__delegate(args);
});
G__15926.cljs$core$IFn$_invoke$arity$variadic = G__15926__delegate;
return G__15926;
})()
;

return null;
});
