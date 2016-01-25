// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__76859__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__76859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76860__i = 0, G__76860__a = new Array(arguments.length -  0);
while (G__76860__i < G__76860__a.length) {G__76860__a[G__76860__i] = arguments[G__76860__i + 0]; ++G__76860__i;}
  args = new cljs.core.IndexedSeq(G__76860__a,0);
} 
return G__76859__delegate.call(this,args);};
G__76859.cljs$lang$maxFixedArity = 0;
G__76859.cljs$lang$applyTo = (function (arglist__76861){
var args = cljs.core.seq(arglist__76861);
return G__76859__delegate(args);
});
G__76859.cljs$core$IFn$_invoke$arity$variadic = G__76859__delegate;
return G__76859;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__76862__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__76862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76863__i = 0, G__76863__a = new Array(arguments.length -  0);
while (G__76863__i < G__76863__a.length) {G__76863__a[G__76863__i] = arguments[G__76863__i + 0]; ++G__76863__i;}
  args = new cljs.core.IndexedSeq(G__76863__a,0);
} 
return G__76862__delegate.call(this,args);};
G__76862.cljs$lang$maxFixedArity = 0;
G__76862.cljs$lang$applyTo = (function (arglist__76864){
var args = cljs.core.seq(arglist__76864);
return G__76862__delegate(args);
});
G__76862.cljs$core$IFn$_invoke$arity$variadic = G__76862__delegate;
return G__76862;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map