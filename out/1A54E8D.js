goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__272635__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__272635 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__272636__i = 0, G__272636__a = new Array(arguments.length -  0);
while (G__272636__i < G__272636__a.length) {G__272636__a[G__272636__i] = arguments[G__272636__i + 0]; ++G__272636__i;}
  args = new cljs.core.IndexedSeq(G__272636__a,0);
} 
return G__272635__delegate.call(this,args);};
G__272635.cljs$lang$maxFixedArity = 0;
G__272635.cljs$lang$applyTo = (function (arglist__272637){
var args = cljs.core.seq(arglist__272637);
return G__272635__delegate(args);
});
G__272635.cljs$core$IFn$_invoke$arity$variadic = G__272635__delegate;
return G__272635;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__272638__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__272638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__272639__i = 0, G__272639__a = new Array(arguments.length -  0);
while (G__272639__i < G__272639__a.length) {G__272639__a[G__272639__i] = arguments[G__272639__i + 0]; ++G__272639__i;}
  args = new cljs.core.IndexedSeq(G__272639__a,0);
} 
return G__272638__delegate.call(this,args);};
G__272638.cljs$lang$maxFixedArity = 0;
G__272638.cljs$lang$applyTo = (function (arglist__272640){
var args = cljs.core.seq(arglist__272640);
return G__272638__delegate(args);
});
G__272638.cljs$core$IFn$_invoke$arity$variadic = G__272638__delegate;
return G__272638;
})()
;

return null;
});
