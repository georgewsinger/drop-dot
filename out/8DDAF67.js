goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34618__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34618 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34619__i = 0, G__34619__a = new Array(arguments.length -  0);
while (G__34619__i < G__34619__a.length) {G__34619__a[G__34619__i] = arguments[G__34619__i + 0]; ++G__34619__i;}
  args = new cljs.core.IndexedSeq(G__34619__a,0);
} 
return G__34618__delegate.call(this,args);};
G__34618.cljs$lang$maxFixedArity = 0;
G__34618.cljs$lang$applyTo = (function (arglist__34620){
var args = cljs.core.seq(arglist__34620);
return G__34618__delegate(args);
});
G__34618.cljs$core$IFn$_invoke$arity$variadic = G__34618__delegate;
return G__34618;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34621__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34622__i = 0, G__34622__a = new Array(arguments.length -  0);
while (G__34622__i < G__34622__a.length) {G__34622__a[G__34622__i] = arguments[G__34622__i + 0]; ++G__34622__i;}
  args = new cljs.core.IndexedSeq(G__34622__a,0);
} 
return G__34621__delegate.call(this,args);};
G__34621.cljs$lang$maxFixedArity = 0;
G__34621.cljs$lang$applyTo = (function (arglist__34623){
var args = cljs.core.seq(arglist__34623);
return G__34621__delegate(args);
});
G__34621.cljs$core$IFn$_invoke$arity$variadic = G__34621__delegate;
return G__34621;
})()
;

return null;
});
