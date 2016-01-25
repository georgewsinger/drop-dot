goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16073__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16074__i = 0, G__16074__a = new Array(arguments.length -  0);
while (G__16074__i < G__16074__a.length) {G__16074__a[G__16074__i] = arguments[G__16074__i + 0]; ++G__16074__i;}
  args = new cljs.core.IndexedSeq(G__16074__a,0);
} 
return G__16073__delegate.call(this,args);};
G__16073.cljs$lang$maxFixedArity = 0;
G__16073.cljs$lang$applyTo = (function (arglist__16075){
var args = cljs.core.seq(arglist__16075);
return G__16073__delegate(args);
});
G__16073.cljs$core$IFn$_invoke$arity$variadic = G__16073__delegate;
return G__16073;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16076__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16076 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16077__i = 0, G__16077__a = new Array(arguments.length -  0);
while (G__16077__i < G__16077__a.length) {G__16077__a[G__16077__i] = arguments[G__16077__i + 0]; ++G__16077__i;}
  args = new cljs.core.IndexedSeq(G__16077__a,0);
} 
return G__16076__delegate.call(this,args);};
G__16076.cljs$lang$maxFixedArity = 0;
G__16076.cljs$lang$applyTo = (function (arglist__16078){
var args = cljs.core.seq(arglist__16078);
return G__16076__delegate(args);
});
G__16076.cljs$core$IFn$_invoke$arity$variadic = G__16076__delegate;
return G__16076;
})()
;

return null;
});
