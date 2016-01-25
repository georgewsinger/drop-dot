goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16084__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16084 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16085__i = 0, G__16085__a = new Array(arguments.length -  0);
while (G__16085__i < G__16085__a.length) {G__16085__a[G__16085__i] = arguments[G__16085__i + 0]; ++G__16085__i;}
  args = new cljs.core.IndexedSeq(G__16085__a,0);
} 
return G__16084__delegate.call(this,args);};
G__16084.cljs$lang$maxFixedArity = 0;
G__16084.cljs$lang$applyTo = (function (arglist__16086){
var args = cljs.core.seq(arglist__16086);
return G__16084__delegate(args);
});
G__16084.cljs$core$IFn$_invoke$arity$variadic = G__16084__delegate;
return G__16084;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16087__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16087 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16088__i = 0, G__16088__a = new Array(arguments.length -  0);
while (G__16088__i < G__16088__a.length) {G__16088__a[G__16088__i] = arguments[G__16088__i + 0]; ++G__16088__i;}
  args = new cljs.core.IndexedSeq(G__16088__a,0);
} 
return G__16087__delegate.call(this,args);};
G__16087.cljs$lang$maxFixedArity = 0;
G__16087.cljs$lang$applyTo = (function (arglist__16089){
var args = cljs.core.seq(arglist__16089);
return G__16087__delegate(args);
});
G__16087.cljs$core$IFn$_invoke$arity$variadic = G__16087__delegate;
return G__16087;
})()
;

return null;
});
